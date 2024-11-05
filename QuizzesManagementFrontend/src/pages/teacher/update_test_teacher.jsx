import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher";
import Navbar_teacher from "../../components/teacher/Navbar_teacher";
import "../../styles/teacher/create_test_teacher.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Update_test_teacher() {

    const navigate = useNavigate();
    const { id, examId } = useParams();
    const [data, setData] = useState([{ question_text: "", points: 1, order: 1, choices: [{ choice_text: "", is_correct: false }] }]);
    const [subject, setSubject] = useState('');
    const [nametest, setNametest] = useState('');

    console.log('exam in create test', examId);

    // ดึงข้อมูลคำถามจาก API
    useEffect(() => {
        if (examId) {
            axios.get(`http://localhost:8000/api/exams/${examId}/questions`)
                .then(response => {
                    // response.data ควรมี id ของคำถามและตัวเลือกแล้ว
                    const questionsWithIds = response.data.map(question => ({
                        ...question,
                        choices: question.choices.map(choice => ({
                            ...choice, // ให้แน่ใจว่าตัวเลือกมี id
                        }))
                    }));
                    setData(questionsWithIds); // ปรับให้ตรงตามรูปแบบที่ได้รับจาก API
                    setSubject(response.data.subject); // ให้แน่ใจว่า response.data มี subject
                    setNametest(response.data.nametest); // ให้แน่ใจว่า response.data มี nametest
                    console.log(questionsWithIds)
                })
                .catch(error => {
                    console.error("Error fetching exam data:", error);
                });
        }
    }, [examId]);
    

    // เพิ่มคำถามใหม่
    const addQuestion = () => {
        setData([...data, { question_text: "", points: 1, order: data.length + 1, choices: [{ choice_text: "", is_correct: false }] }]);
    };

    // เพิ่มตัวเลือกใหม่ให้กับคำถามที่ระบุ
    const addChoice = (i) => {
        const updatedData = [...data];
        updatedData[i].choices.push({ choice_text: "", is_correct: false });
        setData(updatedData);
    };

    // ลบตัวเลือกของคำถามที่ระบุ
    const handelDeleteChoice = (questionIndex, choiceIndex) => {
        const updatedData = [...data];
        updatedData[questionIndex].choices.splice(choiceIndex, 1);
        setData(updatedData);
    };

    // ลบคำถามที่ระบุ
    const handelDelete = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
    };

    const handelDeleteAll = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete all questions?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            if (result.isConfirmed) {
                // ส่งคำขอลบไปยัง backend
                axios.delete('http://127.0.0.1:8000/api/delete-all-questions/', {
                    data: { exam_id: examId } // ส่ง exam_id ถ้าต้องการ
                })
                .then(response => {
                    // ลบข้อมูลทั้งหมดใน state
                    setData([]);
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted!',
                        text: 'All questions have been deleted from the database.',
                        confirmButtonText: 'OK'
                    });
                })
                .catch(error => {
                    console.error("There was an error deleting the questions!", error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: `Failed to delete questions! ${error.response.data}`,
                        confirmButtonText: 'OK'
                    });
                });
            } else {
                Swal.fire('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };
    

    // อัปเดตข้อมูลคำถามเมื่อมีการเปลี่ยนแปลง
    const handleQuestionChange = (index, field, value) => {
        const newData = [...data];
        newData[index][field] = value;
        setData(newData);
    };

    // อัปเดตข้อมูลตัวเลือกเมื่อมีการเปลี่ยนแปลง
    const handleChoiceChange = (questionIndex, choiceIndex, field, value) => {
        const newData = [...data];
        newData[questionIndex].choices[choiceIndex][field] = value;
        setData(newData);
    };

    // ส่งข้อมูลไปยัง backend
    const handleSubmit = (e) => {
        e.preventDefault();
    
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to submit this form?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, submit it!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            console.log("Exam ID being sent: ", examId);
            if (result.isConfirmed) {
                // สร้าง quizData ตามรูปแบบที่ API คาดหวัง
                const quizData = {
                    questions: data.map((question) => ({
                        id: question.id, // เพิ่ม id ของคำถาม
                        exam_id: examId,
                        question_text: question.question_text,
                        points: question.points,
                        order: question.order, // อัปเดต order ถ้าต้องการ
                        choices: question.choices.map((choice) => ({
                            id: choice.id, // เพิ่ม id ของตัวเลือก
                            choice_text: choice.choice_text,
                            is_correct: choice.is_correct
                        }))
                    }))
                };
    
                console.log("Submitting Data: ", quizData);
    
                // ส่งข้อมูลไปยัง backend
                axios.put('http://127.0.0.1:8000/api/update-questions/', quizData)
                    .then(response => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'คุณแก้ไขข้อสอบสำเร็จแล้ว!',
                            confirmButtonText: 'OK'
                        })
                    })
                    .catch(error => {
                        console.error("There was an error creating the exam!", error.response.data);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!',
                            text: `เกิดข้อผิดพลาดในการแก้ไขข้อสอบ! ${error.response.data}`,
                            confirmButtonText: 'OK'
                        });
                    });
            } else {
                Swal.fire('Cancelled', 'Your data is safe :)', 'error');
            }
        });
    };

    return (
        <div>
            <div className="main_home">
                <Navbar_teacher />
                <div className="main_home_right_test">
                    <div className="main_home_right_top">
                        <Navbar_top_teacher />
                    </div>

                    <div className="main_right_test_teacher">
                        <div className="main_right_test_teacher_container">
                            <div className="main_right_test_teacher_top">
                                <button className="btn_create_test" onClick={handleSubmit}>
                                    Update
                                </button>
                                <button className="btn_create_test" onClick={addQuestion}>
                                    Add Question
                                </button>
                                <button className="btn_create_test_delete" onClick={handelDeleteAll}>
                                    Delete All
                                </button>
                            </div>

                            {data.map((val, i) => (
                                <div className="main_right_test_teacher_box" key={i}>
                                    <div className="main_right_test_teacher_box_top">
                                        <div className="main_right_test_teacher_box_top_left">
                                            <FontAwesomeIcon icon={faCircleQuestion} className="icon_question" />
                                            <p>Question {i + 1}*</p>
                                        </div>
                                        <div className="main_right_test_teacher_box_top_right">
                                            <button className="btn-delete" onClick={() => handelDelete(i)}>Delete</button>
                                        </div>
                                    </div>
                                    <div className="main_right_test_teacher_box_question">
                                        <textarea
                                            placeholder="Enter question text"
                                            value={val.question_text}
                                            onChange={(e) => handleQuestionChange(i, 'question_text', e.target.value)}
                                        />
                                    </div>
                                    <div className="main_right_test_teacher_box_choice_head">
                                        <p>Choices</p><p className="choice_star">*</p>
                                    </div>
                                    {val.choices.map((choice, j) => (
                                        <div key={j} className="main_right_test_teacher_box_choice_main">
                                            <input
                                                className="input_radio"
                                                type="radio"
                                                name={`correct-${i}`}
                                                checked={choice.is_correct}
                                                onChange={() => {
                                                    const updatedData = [...data];
                                                    updatedData[i].choices.forEach((c, idx) => {
                                                        updatedData[i].choices[idx].is_correct = (idx === j);
                                                    });
                                                    setData(updatedData);
                                                }}
                                            />
                                            <input
                                                className="input_text"
                                                type="text"
                                                placeholder="Enter choice text"
                                                value={choice.choice_text}
                                                onChange={(e) => handleChoiceChange(i, j, 'choice_text', e.target.value)}
                                            />
                                            <FontAwesomeIcon
                                                icon={faTrashCan}
                                                className="trash"
                                                onClick={() => handelDeleteChoice(i, j)}
                                            />
                                        </div>
                                    ))}
                                    <button className="btn_add_choice" onClick={() => addChoice(i)}>
                                        + Add choice
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Update_test_teacher;

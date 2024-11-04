import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher"
import Navbar_teacher from "../../components/teacher/Navbar_teacher"
import "../../styles/teacher/create_test_teacher.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleQuestion, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import Swal from 'sweetalert2';

function Create_test_teacher() {

    const [modal, setModal] = useState(false);
    const [data, setData] = useState([{ multi: "", fill: "", choices: [""] }]);
    const [subject, setSubject] = useState('');
    const [nametest, setNametest] = useState('');

    const toggleModal = () => setModal(!modal);

    const addQuestion = () => {
        setData([...data, { multi: "", fill: "", choices: [""] }]);
    };

    const addChoice = (i) => {
        const updatedData = [...data];
        updatedData[i].choices.push(""); // เพิ่ม choice ใหม่ให้กับคำถามที่ i
        setData(updatedData);
    };

    const handelDeleteChoice = (questionIndex, choiceIndex) => {
        const updatedData = [...data];
        updatedData[questionIndex].choices.splice(choiceIndex, 1);
        setData(updatedData);
    };

    const handelDelete = (index) => {
        const updatedData = data.filter((_, i) => i !== index); // ลบคำถามที่มีดัชนีตรงกับ index
        setData(updatedData);
    };

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
            if (result.isConfirmed) {
                // ดำเนินการส่งข้อมูลที่นี่
                const quizData = {
                    questions: data,
                    subject: subject,
                    name: nametest,
                };
                console.log("Submitting Data: ", quizData);
                // ส่ง `quizData` ไปยัง backend หรือ API ตามที่ต้องการ
    
                // สมมติว่าคุณใช้ axios สำหรับส่งข้อมูล
                axios.post('http://localhost:8000/api/quizzes/', quizData) // เปลี่ยน URL ตามที่คุณใช้
                    .then(response => {
                        // แสดงแจ้งเตือนว่าการสร้างข้อสอบสำเร็จแล้ว
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'คุณสร้างข้อสอบสำเร็จแล้ว!',
                            confirmButtonText: 'OK'
                        });
                        // ทำสิ่งที่คุณต้องการหลังจากสร้างข้อสอบเสร็จ เช่น รีเซ็ตฟอร์มหรืออะไรก็ได้ที่คุณต้องการ
                    })
                    .catch(error => {
                        console.error("There was an error creating the exam!", error);
                        // แสดงแจ้งเตือนข้อผิดพลาด
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!',
                            text: 'เกิดข้อผิดพลาดในการสร้างข้อสอบ!',
                            confirmButtonText: 'OK'
                        });
                    });
            } else {
                // หากผู้ใช้เลือกที่จะยกเลิก
                Swal.fire(
                    'Cancelled',
                    'Your data is safe :)',
                    'error'
                );
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
                                    Create Test
                                </button>
                                <button className="btn_create_test" onClick={addQuestion}>
                                    Add Question
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
                                        <div className="main_right_test_teacher_box_question_left">
                                            <textarea name="" id=""></textarea>
                                        </div>
                                        <div className="main_right_test_teacher_box_question_right">
                                            <input type="file" id="myFile" name="filename" />
                                        </div>
                                    </div>
                                    <div className="main_right_test_teacher_box_choice_head">
                                        <p>Choice</p><p className="choice_star">*</p>
                                    </div>
                                    {val.choices.map((choiceVal, j) => (
                                        <div className="main_right_test_teacher_box_choice_main" key={j}>
                                            <div className="main_right_test_teacher_box_choice_main_choice">
                                                <input type="radio" value={choiceVal} name={`choices-${i}`} />
                                                <input
                                                    type="text"
                                                    className="label"
                                                    value={choiceVal}
                                                    onChange={(e) => {
                                                        const updatedData = [...data];
                                                        updatedData[i].choices[j] = e.target.value; // อัปเดตค่าของ choice
                                                        setData(updatedData);
                                                    }}
                                                />
                                                <FontAwesomeIcon
                                                    icon={faTrashCan}
                                                    className="trash"
                                                    onClick={() => handelDeleteChoice(i, j)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="main_right_test_teacher_box_choice_add_choice">
                                        <button className="btn_add_choice" onClick={() => addChoice(i)}>
                                            <p>+ Add choice</p>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

    
        </div>
    )
}

export default Create_test_teacher;

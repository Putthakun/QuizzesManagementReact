import Navbar_student from "../../components/student/Navbar_student";
import '../../styles/student/subject.css';
import { Link} from "react-router-dom";
import Navbar_top_student from "../../components/student/Navbar_top_student";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleCheck, faBook, faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

// import { useState } from "react";

function Subject_student() {


    const [modal, setModal] = useState(false);
    const [subjects, setSubject] = useState([]);
    const [error, setError] = useState('');
    const { id } = useParams();
    const [exams, setExams] = useState([]);
    const [modal_result, setModal_result] = useState(false);
    const [selectedExam, setSelectedExam] = useState(null); // State to store selected exam

    useEffect(() => {
        const fetchSubjectDetails = async () => {
            console.log("วิชา ID:", id);
            try {
                const response = await axios.get(`http://localhost:8000/api/subjects/code/${id}/`); // ใช้ `code` ของ subject แทน `id`
                setSubject(response.data);
                console.log(response.data);
                setError(''); // ล้างข้อผิดพลาดเมื่อดึงข้อมูลสำเร็จ

                // ดึงข้อมูลข้อสอบโดยใช้รหัสวิชา
                console.log('subject code', id);
                const examResponse = await axios.get(`http://localhost:8000/api/listexams/${id}/`);
                if (examResponse.status === 200) {
                    setExams(examResponse.data);
                    console.log("Fetched exams:", examResponse.data);
                } else {
                    throw new Error('Failed to fetch exams');
                }

            } catch (error) {
                setError('An error occurred while fetching subject details.'); // ตั้งค่า error
            }
        };

        fetchSubjectDetails(); // เรียกใช้งานฟังก์ชัน
    }, [id]);

    const toggleModal = () => {
        setModal(!modal)
    }

    const handleTakeTestClick = () => {
        
    }

    const toggleModal_result = (exam) => {
        setSelectedExam(exam); // Set the selected exam
        console.log(selectedExam)
        setModal_result(!modal_result);
    };

    return (
        <div>
            <div className="main_home">
                <Navbar_student />
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_student />
                    </div>

                    <div className="main_right_subject_teacher">
                        <div className="main_right_teacher_box_container_subject">
                            <div className="main_right_teacher_subject_top">
                                <div className="main_right_teacher_subject_top_circle"></div>
                                <div className="main_right_teacher_subject_top_name">

                                    {subjects.map(subject => (
                                        <div key={subject.code}> {/* ใช้ `subject.code` เป็น key หรืออาจจะใช้ `subject.id` ถ้ามี */}
                                            <h3>{subject.code} {subject.name}</h3> {/* แสดงชื่อวิชา */}
                                            <p>{subject.teacher ? subject.teacher.split(' - ')[0] : "Unknown Teacher"}</p> {/* แสดงชื่ออาจารย์ */}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="main_right_box_subject_test_container">                  
                                
                                {exams.length > 0 ? (
                                    exams.map((exam) => (
                                            <div className="main_right_subject_result_container" key={exam.id}>
                                                <div className="main_right_box_subject_teacher">
                                                    <div className="main_right_box_subject_main">
                                                        <div className="main_right_box_subject_main_box">
                                                            <div className="main_right_box_subject_main_box_left">
                                                                <div className="main_right_box_subject_main_box_left_head">
                                                                    <div className="main_right_box_subject_main_box_left_head_circle"></div>
                                                                </div>
                                                                <i className="fa-regular fa-face-smile"></i>
                                                            </div>
                                                            <div className="main_right_box_subject_main_box_right">
                                                                <div className="main_right_box_subject_main_box_right_head">
                                                                    <p>Teacher</p>
                                                                    <button className="btn-result" onClick={() => toggleModal_result(exam)}>Result</button>
                                                                </div>
                                                                <div className="main_right_box_subject_main_box_right_main">
                                                                    
                                                                    <div className="main_right_box_subject_main_box_right_main_head_teacher">
                                                                        <h3>{exam.title}</h3>
                                                                        <p>วันครบกำหนด: {exam.due_date}</p>
                                                                    </div>
                                                                    <div className="main_right_box_subject_main_box_right_main_main">
                                                                        <p>{exam.description}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="main_right_box_subject_main_box_right_tail_teacher">
                                                                    <div className="main_right_box_subject_main_box_right_tail_left_teacher">
                                                                        <p>Add your reaction</p>
                                                                    </div>
                                                                    <div className="main_right_box_subject_main_box_right_tail_right_student">
                                                                        <p>คะแนน: {exam.score}</p>
                                                                        <button onClick={toggleModal}>
                                                                            Take Test
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            // <h4>{exam.title}</h4>
                                            // <p>{exam.description}</p>
                                            // <p>วันครบกำหนด: {exam.due_date}</p>
                                            // <p>คะแนน: {exam.score}</p>
                                        
                                    ))
                                ) : (
                                    <div className="main_right_subject_result_container_no">
                                        <div className="main_right_box_subject_test_box">
                                            <FontAwesomeIcon icon={faBook} className="icon_book" />
                                            <h3>รายวิชาของคุณยังไม่มีข้อสอบ</h3>
                                        </div>
                                    </div>
                                    
                                    // <p>ไม่พบข้อสอบสำหรับวิชานี้</p> // ถ้าไม่มีข้อมูลข้อสอบ
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <div className="popup_container_subject_student">
                    <div className="popup_container_box_subject_student">
                        <div className="popup_box_subject_student">
                            <div className="main_right_text_take_test">
                                <h2>Test Rules</h2>
                            </div>
                            <div className="main_right_box_take_test">
                                <div className="main_right_box_take_test_main">
                                    <div className="main_right_box_take_test_main_head">
                                        <div className="main_right_box_take_test_main_head_left">

                                        </div>
                                        <div className="main_right_box_take_test_main_head_right">
                                            <div className="main_right_box_take_test_main_head_right_top">
                                                <p>Maths</p>
                                            </div>
                                            <div className="main_right_box_take_test_main_head_right_bottom">
                                                <p>Calculus 2  Pre Test - Yay</p><p>100 scores</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_right_box_take_test_main_box">
                                        <p>กฎการทำข้อสอบ</p>
                                        
                                        <p>1.ห้าม....</p>
                                        <p>2.ไม่อนุญาต</p>
                                        <p>3.ถ้าหาก</p>
                                        <p>4.ไม่ควร</p>
                                        <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                        <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                        <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                        <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                        <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                        <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                        <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                        <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                        <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                        <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                        <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>

                                    </div>
                                    <div className="main_right_box_take_test_main_tail">
                                        <div className="main_right_box_take_test_main_tail_box">
                                            <button onClick={toggleModal} className="cancle">Cancle</button>
                                        </div>
                                        <div className="main_right_box_take_test_main_tail_box">
                                            <button onClick={handleTakeTestClick}>Take Test</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            { modal_result && selectedExam && (
                <div className="popup_container_subject_student_result">
                <div className="popup_container_box_subject_student_result">
                    <div className="popup_box_subject_student_result">
                        <div className="popup_box_left">
                            <div className="popup_box_left_circle"></div>
                        </div>
                        
                        <div className="popup_box_right_result" >
                            <div className="popup_box_right_head_result">
                                <div className="popup_box_right_head_top_result">
                                    <div className="popup_box_right_head_top_top_result">
                                        <p>{selectedExam.title}</p>
                                    </div>
                                    <div className="popup_box_right_head_top_tail_result">
                                        <p>{selectedExam.description}</p>
                                    </div>
                                </div>
                                <div className="popup_box_right_head_tail_result">
                                    <div className="popup_box_right_head_tail_left_result">
                                        <p>วันครบกำหนด: {selectedExam.due_date}</p>
                                    </div>
                                    <div className="popup_box_right_head_tail_right_result">
                                        <div className="popup_box_right_head_tail_right_correct_result">
                                            <p>จำนวนข้อที่ถูก</p>
                                            <p className="cor">Correct</p>
                                            <p className="score">10/20</p>
                                        </div>
                                        <div className="popup_box_right_head_tail_right_correct_result">
                                            <p>จำนวนข้อที่ถูก</p>
                                            <p className="incor">Incorrect</p>
                                            <p className="score">10/20</p>
                                        </div>
                                        <div className="popup_box_right_head_tail_right_correct_result">
                                            <p>จำนวนข้อที่ถูก</p>
                                            <p className="ans">Answered</p>
                                            <p className="score">10/20</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="popup_box_right_main_result">
                                <div className="popup_box_right_main_box_result">
                                    <div className="popup_box_right_main_box_top_result">
                                        <div className="popup_box_right_main_box_top_left_result">
                                            <p>Question 3 •</p><p><FontAwesomeIcon icon={faCircleCheck} className="true" /></p>
                                        </div>
                                    </div>
                                    <div className="popup_box_right_main_box_tail_result">
                                        <p>1 + 1 = ?</p>
                                    </div>
                                </div>
        
                                <div className="popup_box_right_main_box_result">
                                    <div className="popup_box_right_main_box_top_result">
                                        <div className="popup_box_right_main_box_top_left_result">
                                            <p>Question 4 •</p><p><FontAwesomeIcon icon={faCircleCheck} className="true" /></p>
                                        </div>
                                    </div>
                                    <div className="popup_box_right_main_box_tail_result">
                                        <p>1 + 1 = ?</p>
                                    </div>
                                </div>
        
                                <div className="popup_box_right_main_box_result">
                                    <div className="popup_box_right_main_box_top_result">
                                        <div className="popup_box_right_main_box_top_left_result">
                                            <p>Question 5 •</p><p><FontAwesomeIcon icon={faCircleXmark} className="false" /></p>
                                        </div>
                                    </div>
                                    <div className="popup_box_right_main_box_tail_result">
                                        <p>1 + 1 = ?</p>
                                    </div>
                                </div>
        
        
                                <div className="popup_box_right_main_box_result">
                                    <div className="popup_box_right_main_box_top_result">
                                        <div className="popup_box_right_main_box_top_left_result">
                                            <p>Question 6 •</p><p><FontAwesomeIcon icon={faCircleCheck} className="true" /></p>
                                        </div>
                                    </div>
                                    <div className="popup_box_right_main_box_tail_result">
                                        <p>1 + 1 = ?</p>
                                    </div>
                                </div>
        
                                <div className="popup_box_right_main_box_result">
                                    <div className="popup_box_right_main_box_top_result">
                                        <div className="popup_box_right_main_box_top_left_result">
                                            <p>Question 7 •</p><p><FontAwesomeIcon icon={faCircleXmark} className="false" /></p>
                                        </div>
                                    </div>
                                    <div className="popup_box_right_main_box_tail_result">
                                        <p>1 + 1 = ?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="popup_box_right_tail_result">
                                <button className="popup_box_right_tail_btn" onClick={toggleModal_result}>
                                    Done
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
        
            </div>
            )}

        </div>
    )
}

export default Subject_student

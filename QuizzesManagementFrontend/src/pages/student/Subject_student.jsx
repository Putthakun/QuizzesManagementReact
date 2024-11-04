import Navbar_student from "../../components/student/Navbar_student";
import '../../styles/student/subject.css';
import { Link} from "react-router-dom";
import Navbar_top_student from "../../components/student/Navbar_top_student";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faBook
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
                                                                    Teacher
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
                                                                        <Link to="/take_test_student">
                                                                            Take Test
                                                                        </Link>
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
                <div className="popup_container">
                    <div className="popup_container_box">
                        <div className="popup_box">
                            <form method="POST">
                                {/* {% csrf_token %} */}
                                <div className="popup_box_top">
                                    <div className="popup_box_top_left">
                                        <label className="popup_box_top_left_num">ชื่อข้อสอบ :</label>
                                        <label className="popup_box_top_left_name">รายละเอียด :</label>
                                        <label className="popup_box_top_left_name">วันครบกำหนด :</label>
                                        <label className="popup_box_top_left_name">คะแนน :</label>
                                    </div>
                                    <div className="popup_box_top_right">
                                        <div className="popup_box_top_right_input_num">
                                            <input type="text" name="code" />
                                            {/* {{ form.code }} */}
                                        </div>
                                        <div className="popup_box_top_right_input_name">
                                            <input type="text" name="name" />
                                            {/* {{ form.name }} */}
                                        </div>
                                        <div className="popup_box_top_right_input_name">
                                            <input type="date" name="name" />
                                            {/* {{ form.name }} */}
                                        </div>
                                        <div className="popup_box_top_right_input_name">
                                            <input type="text" name="name" />
                                            {/* {{ form.name }} */}
                                        </div>
                                    </div>
                                </div>
                                <div className="popup_box_tail">
                                    <button type="button" className="popup_box_tail_cancel" onClick={toggleModal}>Cancel</button>
                                    <button type="submit" className="popup_box_tail_save">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Subject_student

import Navbar_teacher from "../../components/teacher/Navbar_teacher";
import '../../styles/teacher/subject_teacher.css';
import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faBook
} from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

// import { useState } from "react";

function Subject_teacher() {


    const [modal, setModal] = useState(false);
    const [subjects, setSubject] = useState([]);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchSubjectDetails = async () => {
            console.log("วิชา ID:", id);
            try {
                const response = await axios.get(`http://localhost:8000/api/subjects/code/${id}/`); // ใช้ `code` ของ subject แทน `id`
                setSubject(response.data);
                console.log(response.data);
                setError(''); // ล้างข้อผิดพลาดเมื่อดึงข้อมูลสำเร็จ
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
                <Navbar_teacher />
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_teacher />
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
                            <div className="main_right_teacher_subject_box_add">
                                <div className="main_right_teacher_subject_add">
                                    <div className="main_right_teacher_subject_add_name">

                                        <p>เพิ่มข้อสอบในชั้นเรียน</p>
                                    </div>
                                    <button onClick={toggleModal}>
                                        <FontAwesomeIcon icon={faPlus} className="plus_subject" />
                                    </button>
                                </div>
                            </div>

                            <div className="main_right_box_subject_test_container">

                                <div className="main_right_box_subject_test_box">
                                    <FontAwesomeIcon icon={faBook} className="icon_book" />
                                    <h3>รายวิชาของคุณยังไม่มีข้อสอบ</h3>
                                </div>

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

export default Subject_teacher

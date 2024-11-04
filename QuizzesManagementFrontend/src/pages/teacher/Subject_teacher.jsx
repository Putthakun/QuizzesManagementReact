import Navbar_teacher from "../../components/teacher/Navbar_teacher";
import '../../styles/teacher/subject_teacher.css';
import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faBook
} from '@fortawesome/free-solid-svg-icons'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
// import Swal from "sweetalert2";

// import { useState } from "react";

function Subject_teacher() {

    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [subjects, setSubject] = useState([]);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [due_date, setDue_date] = useState('')
    const [score, setScore] = useState('')
    const [error, setError] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [exams, setExams] = useState([]);
    const { id } = useParams();

    const toggleSuccessModal = () => {
        setShowSuccessModal(!showSuccessModal);
    };

    const toggleModal = () => {
        setModal(!modal)
    }

    // const toggleSuccessModal = () => {
    //     Swal.fire({
    //         icon: "success",
    //         title: "Your work has been saved",
    //         showConfirmButton: false,
    //         timer: 2500
    //       });
    //     // setShowSuccessModal(!showSuccessModal);
    // };
    useEffect(() => {
        const fetchSubjectDetails = async () => {
            console.log("วิชา ID:", id);
            try {
                // ดึงข้อมูลวิชาจาก API
                const response = await axios.get(`http://localhost:8000/api/subjects/code/${id}/`);
                setSubject(response.data); // ตั้งค่าข้อมูลวิชา
                console.log("Fetched subject details:", response.data);
                setError(''); // ล้างข้อผิดพลาดก่อนหน้า

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
                console.error('Error fetching data:', error);
                setError('เกิดข้อผิดพลาดระหว่างการดึงข้อมูลวิชาหรือข้อสอบ'); // ตั้งค่าข้อผิดพลาด
            }
        };

        fetchSubjectDetails(); // เรียกใช้ฟังก์ชัน
    }, [id]); // ทำงานเมื่อ id เปลี่ยนแปลง

    const handleSubmit = async (e) => {
        e.preventDefault();

        const examData = {
            subject_code: id,  // code ของ Subject
            title: title,
            description: description,
            due_date: due_date,
            score: parseInt(score, 10)  // แปลงคะแนนเป็นตัวเลข
        };

        try {
            const response = await axios.post('http://localhost:8000/api/exams/', examData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            toggleModal();
            toggleSuccessModal();
            console.log('Exam created successfully:', response.data);
            // ทำสิ่งที่คุณต้องการหลังจากสร้างข้อสอบ เช่น รีเซ็ตฟอร์ม หรือแจ้งเตือนผู้ใช้
            const examResponse = await axios.get(`http://localhost:8000/api/listexams/${id}/`);
            if (examResponse.status === 200) {
                setExams(examResponse.data);
                console.log("Fetched exams:", examResponse.data);
            } else {
                throw new Error('Failed to fetch exams');
            }
            navigate('/create_test_teacher')
        } catch (error) {
            console.error('There was an error creating the exam!', error.response.data);
            // แสดงข้อผิดพลาดให้ผู้ใช้ทราบ
        }

    };

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
                                {exams.length > 0 ? (
                                    exams.map((exam) => (
                                        <li key={exam.id}>
                                            <h4>{exam.title}</h4>
                                            <p>{exam.description}</p>
                                            <p>วันครบกำหนด: {exam.due_date}</p>
                                            <p>คะแนน: {exam.score}</p>
                                        </li>
                                    ))
                                ) : (
                                    <p>ไม่พบข้อสอบสำหรับวิชานี้</p> // ถ้าไม่มีข้อมูลข้อสอบ
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showSuccessModal && (
                <div className="popup_container">
                    <div className="popup_container_box">
                        <div className="popup_box">
                            <button type="button" className="popup_box_tail_cancel" onClick={toggleSuccessModal}>OK</button>
                        </div>
                    </div>
                </div>
            )}
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
                                            <input
                                                type="text"
                                                name="code"
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                            {/* {{ form.code }} */}
                                        </div>
                                        <div className="popup_box_top_right_input_name">
                                            <input
                                                type="text"
                                                name="name"
                                                onChange={(e) => setDescription(e.target.value)}
                                            />
                                            {/* {{ form.name }} */}
                                        </div>
                                        <div className="popup_box_top_right_input_name">
                                            <input
                                                type="date"
                                                name="name"
                                                onChange={(e) => setDue_date(e.target.value)}
                                            />
                                            {/* {{ form.name }} */}
                                        </div>
                                        <div className="popup_box_top_right_input_name">
                                            <input
                                                type="text"
                                                name="name"
                                                onChange={(e) => setScore(e.target.value)}
                                            />
                                            {/* {{ form.name }} */}
                                        </div>
                                    </div>
                                </div>
                                <div className="popup_box_tail">
                                    <button type="button" className="popup_box_tail_cancel" onClick={toggleModal}>Cancel</button>
                                    <button
                                        type="submit"
                                        className="popup_box_tail_save"
                                        onClick={handleSubmit}
                                    >Save</button>
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

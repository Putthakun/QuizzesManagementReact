import Navbar_teacher from "../../components/teacher/Navbar_teacher";
import '../../styles/teacher/subject_teacher.css';
import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faBook
} from '@fortawesome/free-solid-svg-icons'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
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
    const [errors, setErrors] = useState({});
    const { id } = useParams();

    const toggleSuccessModal = () => {
        setShowSuccessModal(!showSuccessModal);
    };

    const toggleModal = () => {
        setModal(!modal)
    }

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
    
        console.log(id);
    
        try {
            // แสดงการแจ้งเตือนเพื่อยืนยันการส่งข้อมูล
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "Do you want to submit this exam?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, submit it!',
                cancelButtonText: 'No, cancel!',
            });
    
            if (result.isConfirmed) {
                const response = await axios.post('http://localhost:8000/api/exams/', examData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                toggleModal(); // ปิด modal
                console.log('Exam created successfully:', response.data);
                setErrors({}); // Clear errors if successful
    
                // แสดงแจ้งเตือนว่าการสร้าง exam สำเร็จแล้ว
                await Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'คุณสร้างรายการข้อสอบสำเร็จแล้ว!',
                    confirmButtonText: 'OK'
                });
    
                // รีเฟรชข้อมูลข้อสอบ
                const examResponse = await axios.get(`http://localhost:8000/api/listexams/${id}/`);
                if (examResponse.status === 200) {
                    setExams(examResponse.data);
                    console.log("Fetched exams:", examResponse.data);
                } else {
                    throw new Error('Failed to fetch exams');
                }
                navigate('/create_test_teacher'); // นำทางไปยังหน้าสร้างข้อสอบ
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // Set errors from API response
                setErrors(error.response.data);
            } else {
                console.error("There was an error creating the exam!", error);
            }
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

                                {exams.length > 0 ? (
                                    exams.map((exam) => (
                                        <Link to="/create_test_teacher" className="main_right_subject_result_container" key={exam.id}>
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
                                                                <div className="main_right_box_subject_main_box_right_tail_right_teacher">
                                                                    <p>คะแนน: {exam.score}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
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
                                            {errors.description && (
                                                <p style={{ color: 'red !important' }}>
                                                    {errors.description.join(', ')}
                                                </p>
                                            )}
                                            {/* {{ form.name }} */}
                                        </div>
                                        <div className="popup_box_top_right_input_name">
                                            <input
                                                type="date"
                                                name="name"
                                                onChange={(e) => setDue_date(e.target.value)}
                                            />
                                            {errors.due_date && <span>{errors.due_date.join(', ')}</span>}
                                            {/* {{ form.name }} */}
                                        </div>
                                        <div className="popup_box_top_right_input_name">
                                            <input
                                                type="text"
                                                name="name"
                                                onChange={(e) => setScore(e.target.value)}
                                            />
                                            {errors.score && <span>{errors.score.join(', ')}</span>}
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
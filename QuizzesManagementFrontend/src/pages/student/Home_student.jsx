import Navbar_student from "../../components/student/Navbar_student";
import '../../styles/student/home.css';
import Navbar_top_student from "../../components/student/Navbar_top_student";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

export default function Home_student() {
    const navigate = useNavigate();
    const location = useLocation();
    axios.defaults.withCredentials = true;
    const user_id = sessionStorage.getItem('user_id'); // ดึง user_id จาก sessionStorage
    const [subjects, setSubjects] = useState([]);
    const [error, setError] = useState('');
    const [modalSubject, setModalSubject] = useState(false);
    const [subjectCode, setSubjectCode] = useState('');

    useEffect(() => {
        fetchSubjects(); // เรียกใช้ฟังก์ชันเพื่อดึงวิชาเมื่อเริ่มต้น
    }, [user_id]);

    const fetchSubjects = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/student/${user_id}/subjects/`);
            setSubjects(response.data);
        } catch (error) {
            setError(error.response ? error.response.data : 'An error occurred');
        }
    };

    const handleSubjectClick = (code) => {
        navigate(`/subject_student/${code}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous error messages

        // Validate subject code before sending
        if (!subjectCode) {
            setError('Please enter a valid subject code.');
            return; // Stop execution if subject code is invalid
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/enroll/', {
                student_id: user_id,  // Use user_id
                subject_code: subjectCode,
            });

            if (response.status === 201) {
                Swal.fire({
                    icon: "success",
                    title: "Successfully enrolled!",
                    showConfirmButton: false,
                    timer: 2500,
                });
                setSubjectCode(''); // Clear the input
                setModalSubject(false); // Close modal

                // เรียกใช้ฟังก์ชันเพื่อดึงข้อมูลวิชาใหม่หลังจากการลงทะเบียนสำเร็จ
                fetchSubjects();
            }
        } catch (err) {
            setError('Error enrolling in subject. Please check the subject code and try again.');
        }
    };

    const toggleModalSubject = () => {
        setModalSubject(!modalSubject);
    };

    return (
        <div className="main_home">
            <Navbar_student />
            <div className="main_home_right">
                <div className="main_home_right_top">
                    <Navbar_top_student />
                </div>
                
                <div className="main_right_student_box_container">
                    {subjects.length > 0 ? (
                        subjects.map(subject => (
                            <div
                                className="main_right_student_box"
                                key={subject.id || `${subject.code}-${subject.name}`}
                                onClick={() => handleSubjectClick(subject.code)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div>
                                    <p className="mr-4">{subject.code}</p>
                                    <p className="mr-4">{subject.name}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="main_right_box_subject_test_box">
                            <FontAwesomeIcon icon={faBook} className="icon_book" />
                            <h3>ยังไม่มีรายวิชาที่ลงทะเบียน</h3>
                        </div>
                    )}
                </div>

                <div className="main_right_home_teacher">
                    <button className="box_add_subject" onClick={toggleModalSubject}>
                        <FontAwesomeIcon icon={faPlus} className="plus" />
                    </button>
                </div>

                {modalSubject && (
                    <div className="popup_container">
                        <div className="popup_container_box">
                            <div className="popup_box">
                                <form onSubmit={handleSubmit}>
                                    <div className="popup_box_top">
                                        <label className="popup_box_top_left_num">รหัสวิชา :</label>
                                        <input
                                            type="text"
                                            value={subjectCode}
                                            onChange={(e) => setSubjectCode(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="popup_box_tail">
                                        <button type="button" className="popup_box_tail_cancel" onClick={toggleModalSubject}>Cancel</button>
                                        <button type="submit" className="popup_box_tail_save">Add</button>
                                    </div>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

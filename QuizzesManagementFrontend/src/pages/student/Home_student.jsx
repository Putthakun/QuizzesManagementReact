import Navbar_student from "../../components/student/Navbar_student";
import '../../styles/student/home.css';
import Navbar_top_student from "../../components/student/Navbar_top_student";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

export default function Home_student() {
    const navigate = useNavigate();
    const location = useLocation();
    // const { user_type, user_id,firstname, lastname } = location.state || {};
    axios.defaults.withCredentials = true;
    const user_id = sessionStorage.getItem('user_id'); // ดึง user_id จาก sessionStorage
    const [subjects, setSubjects] = useState('');
    const [error, setError] = useState('');
    const [modalSubject, setModalSubject] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [numsubject, setNumsubject] = useState('');

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/student/${user_id}/subjects/`);
                
                setSubjects(response.data);
                console.log(response.data);
            } catch (error) {
                
                setError(error.response ? error.response.data : 'An error occurred');
            }
        };

        fetchSubjects();
    }, [user_id]);

    const handleSubjectClick = (code) => {
        navigate(`/subject_student/${code}`);
    };

    const toggleModalSubject = () => {
        setModalSubject(!modalSubject)
    }

    const toggleSuccessModal = () => {
        Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 2500
          });
        // setShowSuccessModal(!showSuccessModal);
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
                                <div className="main_right_student_box_head">
                                    {subject.name}
                                </div>
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

                    <div className="main_right_teacher_box_container">

                    </div>
                    <button className="box_add_subject">
                        <FontAwesomeIcon icon={faPlus} className="plus" onClick={toggleModalSubject} />
                    </button>
                </div>

                {modalSubject && (
                    <div className="popup_container">
                        <div className="popup_container_box">
                            <div className="popup_box">
                                <form method="POST">
                                    {/* {% csrf_token %} */}
                                    <div className="popup_box_top">
                                        <div className="popup_box_top_left">
                                            <label className="popup_box_top_left_num">รหัสวิชา :</label>
                                        </div>
                                        <div className="popup_box_top_right">
                                            <div className="popup_box_top_right_input_name">
                                                <input type="text" name="name"
                                                    value={numsubject}
                                                    onChange={(e) => setNumsubject(e.target.value)}
                                                />
                                                {/* {{ form.name }} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popup_box_tail">
                                        <button type="button" className="popup_box_tail_cancel" onClick={toggleModalSubject}>Cancel</button>
                                        <button
                                            type="submit"
                                            className="popup_box_tail_save"
                                            // onClick={handleSubmit}
                                        >Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
                }

            </div>
        </div>
    );
}
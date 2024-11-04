import Navbar_student from "../../components/student/Navbar_student";
import '../../styles/student/home.css';
import Navbar_top_student from "../../components/student/Navbar_top_student";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export default function Home_student() {
    const navigate = useNavigate();
    const location = useLocation();
    // const { user_type, user_id,firstname, lastname } = location.state || {};
    axios.defaults.withCredentials = true;
    const user_id = sessionStorage.getItem('user_id'); // ดึง user_id จาก sessionStorage
    const [subjects, setSubjects] = useState('');
    const [error, setError] = useState('');

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
            </div>
        </div>
    );
}
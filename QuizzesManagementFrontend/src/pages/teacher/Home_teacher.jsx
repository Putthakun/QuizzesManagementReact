import Navbar from "../student/navbar";
import '../../styles/teacher/home_teacher.css';
import Navbar_top from "../student/Navbar_top";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Home_teacher() {

    const location = useLocation();
    const { user_type, user_id, firstname, lastname } = location.state || {};
    axios.defaults.withCredentials = true;
    const [modal, setModal] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [sessionData, setSessionData] = useState(null);
    const [numsubject, setNumsubject] = useState("")
    const [namesubject, setNamesubject] = useState("")
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const toggleModal = () => {
        setModal(!modal)
    }

    const toggleSuccessModal = () => {
        setShowSuccessModal(!showSuccessModal);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  
        setErrorMessage('');  
        setSuccessMessage('');
        

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/subjects/', {
                code: numsubject,         
                name: namesubject,        
                teacher_id: user_id       
            });
            setSuccessMessage('Subject added successfully!');
            toggleModal(); 
            setTimeout(() => {
                toggleSuccessModal();  // ใช้ setTimeout เพื่อให้ modal แรกปิดก่อน
            }, 300); // ปิด modal แรกก่อนประมาณ 300ms
            console.log(response.data); 
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.error || 'An error occurred.'); 
            } else {
                setErrorMessage('An error occurred.'); 
            }
        }
    };
    console.log(numsubject, namesubject,user_id)

    return (
        <div>
            <div className="main_home">
                <Navbar />
                <div className="main_home_right">
                    <div className="main_home_right_top">
                    <Navbar_top firstname={firstname} lastname={lastname} user_type={user_type}  />
                    </div>
                    <div className="main_right_home_teacher">
                        <div className="main_right_teacher_box_container">
                            <div className="main_right_teacher_box">
                                <div className="main_right_teacher_box_head">

                                </div>
                                <div className="main_right_teacher_box_tail">

                                </div>
                            </div>

                            <div className="main_right_teacher_box">
                                <div className="main_right_teacher_box_head">

                                </div>
                                <div className="main_right_teacher_box_tail">

                                </div>
                            </div>

                            <div className="main_right_teacher_box">
                                <div className="main_right_teacher_box_head">

                                </div>
                                <div className="main_right_teacher_box_tail">

                                </div>
                            </div>

                            <div className="main_right_teacher_box">
                                <div className="main_right_teacher_box_head">

                                </div>
                                <div className="main_right_teacher_box_tail">

                                </div>
                            </div>

                            <div className="main_right_teacher_box">
                                <div className="main_right_teacher_box_head">

                                </div>
                                <div className="main_right_teacher_box_tail">

                                </div>
                            </div>
                            <div className="main_right_teacher_box">
                                <div className="main_right_teacher_box_head">

                                </div>
                                <div className="main_right_teacher_box_tail">

                                </div>
                            </div>
                            <div className="main_right_teacher_box">
                                <div className="main_right_teacher_box_head">

                                </div>
                                <div className="main_right_teacher_box_tail">

                                </div>
                            </div>
                            <div className="main_right_teacher_box">
                                <div className="main_right_teacher_box_head">

                                </div>
                                <div className="main_right_teacher_box_tail">

                                </div>
                            </div>
                            <div className="main_right_teacher_box">
                                <div className="main_right_teacher_box_head">

                                </div>
                                <div className="main_right_teacher_box_tail">

                                </div>
                            </div>
                            <div className="main_right_teacher_box">
                                <div className="main_right_teacher_box_head">

                                </div>
                                <div className="main_right_teacher_box_tail">

                                </div>
                            </div>
                            <div className="main_right_teacher_box">
                                <div className="main_right_teacher_box_head">

                                </div>
                                <div className="main_right_teacher_box_tail">

                                </div>
                            </div>

                        </div>

                        <button className="box_add_subject">
                            <FontAwesomeIcon icon={faPlus} className="plus" onClick={toggleModal} />
                        </button>
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
                                        <label className="popup_box_top_left_num">รหัสวิชา :</label>
                                        <label className="popup_box_top_left_name">ชื่อวิชา :</label>
                                    </div>
                                    <div className="popup_box_top_right">
                                        <div className="popup_box_top_right_input_num">
                                            <input type="text" name="code"
                                                value={numsubject}
                                                onChange={(e) => setNumsubject(e.target.value)}
                                            />
                                            {/* {{ form.code }} */}
                                        </div>
                                        <div className="popup_box_top_right_input_name">
                                            <input type="text" name="name"
                                                value={namesubject}
                                                onChange={(e) => setNamesubject(e.target.value)}
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

            {/* {modal && (
                <div className="popup_container">
                    <div className="popup_container_box">
                        <div className="popup_box">
                            <form method="POST">  
                                <div className="popup_box_top">
                                    <div className="popup_box_top_left">
                                        <label className="popup_box_top_left_num">รหัสวิชา :</label>
                                        <label className="popup_box_top_left_name">ชื่อวิชา :</label>
                                    </div>
                                    <div className="popup_box_top_right">
                                        <div className="popup_box_top_right_input">
                                            <input type="text" name="code" />
                                            { {{ form.code }} }
                                        </div>
                                        <div className="popup_box_top_right_input">
                                            <input type="text" name="name" />
                                            { {{ form.name }} }
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
            )} */}

        </div>

    )
}

export default Home_teacher

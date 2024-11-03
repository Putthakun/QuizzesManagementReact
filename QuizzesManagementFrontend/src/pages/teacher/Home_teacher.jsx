import Navbar from "../student/navbar";
import '../../styles/teacher/home_teacher.css';
import Navbar_top from "../student/Navbar_top";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Home_teacher() {

    const location = useLocation();
    const { user_type, user_id, firstname, lastname } = location.state || {};
    axios.defaults.withCredentials = true;
    const [modal, setModal] = useState(false)
    const [sessionData, setSessionData] = useState(null);
    const [numsubject, setNumsubject] = useState("")
    const [namesubject, setNamesubject] = useState("")
    const { subjects } = location.state || { subjects: [] }; // Get subjects from location state
    const toggleModal = () => {
        setModal(!modal)
    }
    useEffect(() => {
        // Log the subjects to the console
        console.log("Subjects taught by the teacher:", subjects);
    }, [subjects]); // Run this effect whenever subjects change

    return (
        <div>
            <div className="main_home">
                <Navbar />
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top firstname={firstname} lastname={lastname} user_type={user_type} />
                    </div>
                    <div className="main_right_home_teacher">
                        <div className="main_right_teacher_box_container">
                            {subjects.length > 0 ? (
                                subjects.map((subject) => (
                                    <div className="main_right_teacher_box" key={subject.code}>
                                        <div className="main_right_teacher_box_head">
                                            <h3>{subject.name}</h3> {/* Display subject name in the box head */}
                                        </div>
                                        <div className="main_right_teacher_box_tail">
                                            <p>Code: {subject.code}</p> {/* Display subject code */}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="main_right_teacher_box">
                                    <p>No subjects assigned.</p>
                                </div>
                            )}
                        </div>

                        <button className="box_add_subject">
                            <FontAwesomeIcon icon={faPlus} className="plus" onClick={toggleModal} />
                        </button>
                    </div>
                </div>
            </div >


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
                                    <button type="submit" className="popup_box_tail_save">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
            }

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

        </div >

    )
}

export default Home_teacher

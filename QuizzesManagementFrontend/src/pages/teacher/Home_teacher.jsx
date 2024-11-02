import Navbar_teacher from '../../components/teacher/Navbar_teacher';
import '../../styles/teacher/home_teacher.css';
import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus
} from '@fortawesome/free-solid-svg-icons'
import { useState, 
    // useEffect  
} from "react";
import axios from 'axios';

function Home_teacher() {

    axios.defaults.withCredentials = true;
    const [modal, setModal] = useState(false)
    // const [sessionData, setSessionData] = useState(null);
    const [numsubject, setNumsubject] = useState("")
    const [namesubject, setNamesubject] = useState("")

    // const getCSRFToken = () => {
    //     return document.cookie.split('; ').find(row => row.startsWith('csrftoken=')).split('=')[1];
    // };
    const toggleModal = () => {
        setModal(!modal)
    }
    console.log(numsubject, namesubject)

    // useEffect(() => {
    //     const checkSession = async () => {
    //         try {
    //             const response = await axios.get('http://127.0.0.1:8000/api/blog/check_session', { withCredentials: true });
    //             console.log(response.data);
    //         } catch (error) {
    //             console.log("No active session found");
    //         }
    //     };
    
    //     checkSession();
    // }, []);
    return (
        <div>
            <div className="main_home">
                <Navbar_teacher/>
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_teacher/>
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
            )}
            
        </div>
        
    )
}

export default Home_teacher

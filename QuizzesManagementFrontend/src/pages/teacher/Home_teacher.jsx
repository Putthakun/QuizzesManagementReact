import Navbar from "../student/navbar";
import '../../styles/teacher/home_teacher.css';
import Navbar_top from "../student/Navbar_top";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus
} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Home_teacher() {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div>
            <div className="main_home">
                <Navbar/>
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top/>
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
                                            <input type="text" name="code" />
                                            {/* {{ form.code }} */}
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

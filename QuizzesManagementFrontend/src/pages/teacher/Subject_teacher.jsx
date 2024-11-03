import Navbar_teacher from "../../components/teacher/Navbar_teacher";
import '../../styles/teacher/subject_teacher.css';
import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBook
} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

// import { useState } from "react";

function Subject_teacher() {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div>
            <div className="main_home">
                <Navbar_teacher/>
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_teacher/>
                    </div>
                    
                    <div className="main_right_subject_teacher">
                        <div className="main_right_teacher_box_container_subject">
                            <div className="main_right_teacher_subject_top">
                                <div className="main_right_teacher_subject_top_circle"></div>
                                <div className="main_right_teacher_subject_top_name">
                                    <h3>6400261 Math</h3>
                                    <p>Dr. Mod LOVE?</p>
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
                                    <FontAwesomeIcon icon={faBook} className="icon_book"/>
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

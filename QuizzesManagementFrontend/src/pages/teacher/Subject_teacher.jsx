import Navbar from "../student/navbar";
import '../../styles/teacher/subject_teacher.css';
import Navbar_top from "../student/Navbar_top";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBook
} from '@fortawesome/free-solid-svg-icons'

// import { useState } from "react";

function Subject_teacher() {
    return (
        <div>
            <div className="main_home">
                <Navbar/>
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top/>
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
                                    <button>
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
        </div>
    )
}

export default Subject_teacher

import Navbar from "./navbar";
import Navbar_top from "./Navbar_top";
import '../../styles/student/subject.css';

function Subject_student() {
    return (
        <div>
            <div className="main_home">
                <Navbar/>
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top/>
                    </div>
                        
                    <div className="main_right_subject">
                        <div className="main_right_box_subject">
                            <div className="main_right_box_subject_head">
                                <div className="main_right_box_subject_head_circle"></div>
                                <div className="main_right_box_subject_head_name">
                                    <p>Math</p>
                                    <p></p>
                                </div>
                            </div>
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
                                            
                                            <div className="main_right_box_subject_main_box_right_main_head">
                                                <h3>Calculus 1  Pre Test - Drip yo yo</h3>
                                                <p>ครบกำหนด 20 ต.ค.</p>
                                            </div>
                                            <div className="main_right_box_subject_main_box_right_main_main">
                                                <p>Hey! Guys I want you to try this pre test first to check that you guys ready for study!</p>
                                            </div>
                                        </div>
                                        <div className="main_right_box_subject_main_box_right_tail">
                                            <div className="main_right_box_subject_main_box_right_tail_left">
                                                <p>Add your reaction</p>
                                            </div>
                                            <div className="main_right_box_subject_main_box_right_tail_right">
                                                <div className="main_right_box_subject_main_box_right_tail_right_score">
                                                    <p>100 Score</p>
                                                </div>
                                                <div className="main_right_box_subject_main_box_right_tail_right_choice">
                                                    <i className="fa-regular fa-pen-to-square"></i><p>Multiple Choice</p>
                                                </div>
                                                <div className="main_right_box_subject_main_box_right_tail_right_box">
                                                    <a href="{% url 'take_test_page' %}">Take Test</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subject_student

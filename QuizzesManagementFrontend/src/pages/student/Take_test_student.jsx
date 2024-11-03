import Navbar_student from "../../components/student/Navbar_student";
import Navbar_top_student from "../../components/student/Navbar_top_student";
import '../../styles/student/take_test.css';


function Take_test_student() {
    return (
        <div>
            <div className="main_home">
                <Navbar_student/>
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_student/>
                    </div>
                        
                    <div className="main_right_take_test">
                        <div className="main_right_text_take_test">
                            <h2>Test Rules</h2>
                        </div>
                        <div className="main_right_box_take_test">
                            <div className="main_right_box_take_test_main">
                                <div className="main_right_box_take_test_main_head">
                                    <div className="main_right_box_take_test_main_head_left">

                                    </div>
                                    <div className="main_right_box_take_test_main_head_right">
                                        <div className="main_right_box_take_test_main_head_right_top">
                                            <p>Maths</p>
                                        </div>
                                        <div className="main_right_box_take_test_main_head_right_bottom">
                                            <p>Calculus 2  Pre Test - Yay</p><p>100 scores</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main_right_box_take_test_main_box">
                                    <p>กฎการทำข้อสอบ</p>
                                    
                                    <p>1.ห้าม....</p>
                                    <p>2.ไม่อนุญาต</p>
                                    <p>3.ถ้าหาก</p>
                                    <p>4.ไม่ควร</p>
                                    <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                    <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                    <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                    <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                    <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                    <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                    <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                    <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                    <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                    <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>
                                    <p>ทั้งนี้ห้ามทุกอย่าง หยอก</p>

                                </div>
                                <div className="main_right_box_take_test_main_tail">
                                    <div className="main_right_box_take_test_main_tail_box">
                                        <a href="{% url 'multi_page' %}">Take Test</a>
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

export default Take_test_student

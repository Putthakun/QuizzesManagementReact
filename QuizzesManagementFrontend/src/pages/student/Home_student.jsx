import Navbar_student from "../../components/student/Navbar_student";
import '../../styles/student/home.css';
import Navbar_top_student from "../../components/student/Navbar_top_student";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Home_student() {

    // const navigate = useNavigate();

    // useEffect(() => {
    //     const userType = sessionStorage.getItem('user_type');
        
    //     if (userType !== 'student') {
    //         alert("คุณไม่ใช่ student/โปรดสมัครสมาชิก");
    //         navigate('/login');
    //     }
    // }, [navigate]);

    return (
        <>
            <div className="main_home">
                <Navbar_student />
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_student />
                    </div>
                    <div className="main_home_right_main">
                        <div className="search_box">
                            <input name="fsrch" id="fsrch" placeholder="Search for any subjects" />
                        </div>
                        <div className="subset_subject">
                            <div className="circle_subject">
                                <Link to="/subject_student" className="circle"></Link>
                                <p>Math</p>
                            </div>
                            <div className="circle_subject">
                                <div className="circle"></div>
                                <p>Science</p>
                            </div>
                            <div className="circle_subject">
                                <div className="circle"></div>
                                <p>English</p>
                            </div>
                            <div className="circle_subject">
                                <div className="circle"></div>
                                <p>Computer</p>
                            </div>
                            <div className="circle_subject">
                                <div className="circle"></div>
                                <p>Art</p>
                            </div>
                        </div>
                        <div className="main_right_bottom">
                            <div className="box_bottom">
                                <div className="box"></div>
                                <div className="box"></div>
                                <div className="box"></div>
                                <div className="box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import '../../styles/student/student.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        // <div className="navbar">
        //     <div className="navbar_left">
        //         <a href="#" className="cs">CS</a>
        //         <a href="#">Quizzes Management</a>
        //     </div>
        //     <div className="navbar_right">
        //         <div className="navbar_right_icon">
        //             <i className="fa-regular fa-circle-user"></i>
        //         </div>
        //         <div className="navbar_right_box">
        //             <p className="username">Firstname Lastname</p>
        //             <p className="student">Student</p>
        //         </div>
        //         <div className="navbar_right_icon2">
        //             <i className="fa-solid fa-bell"></i>
        //         </div>
        //     </div>
        // </div>
    <div className="main">
        <div className="left">
            <div className="left_top">
                <Link to='/home_student' className='icon_cs'>CS</Link>
                <Link to='/home_student' className='quiz'>Quizzes Management</Link>
            </div>
            <div className="left_main">
                <div className="left_main_top">
                    Menu
                </div>
                <div className="left_main_tail">
                    Logout
                </div>
            </div>
        </div>
        <div className="right">
            da
        </div>
    </div>
    )
}
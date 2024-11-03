import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import {useNavigate } from "react-router-dom";
function Navbar_top_teacher() {
    const user_id = sessionStorage.getItem('user_id') || '';
    const firstname = sessionStorage.getItem('firstname') || '';
    const lastname = sessionStorage.getItem('lastname') || '';
    const userType = sessionStorage.getItem('user_type') || '';
    const navigate = useNavigate();

    useEffect(() => {
        const userType = sessionStorage.getItem('user_type');
        
        if (userType !== 'teacher') {
            alert("คุณไม่ใช่ teacher/โปรดสมัครสมาชิก");
            navigate('/login');
        }
    }, [navigate]);
    console.log(user_id, firstname, lastname); // ตรวจสอบค่าที่ดึงมา
  
    return (
        <div className="right_top">
            <div className="right_top_tail">
                <div className="right_top_tail_left">
                    <FontAwesomeIcon icon={faCircleUser} className='icon_user' />
                    <div className="right_top_tail_left_right">
                        <p className="username">{firstname} {lastname}</p>
                        <p className="student">{userType}</p>
                    </div>
                </div>
                <div className="right_top_tail_right">
                    <FontAwesomeIcon icon={faBell} className='icon_menu' />
                </div>
            </div>
        </div>
    );
}export default Navbar_top_teacher;

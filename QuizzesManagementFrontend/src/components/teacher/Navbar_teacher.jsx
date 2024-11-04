import '../../styles/student/student.css';
import { Link,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSquarePollVertical, faFilePen, faFile, 
    faFaceSmile, faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // ลบข้อมูลที่เกี่ยวข้องกับ user ออกจาก sessionStorage
        sessionStorage.removeItem('user_id');
        sessionStorage.removeItem('user_type');
        sessionStorage.removeItem('firstname');
        sessionStorage.removeItem('lastname');
        
        // นำผู้ใช้กลับไปยังหน้า login
        navigate('/login');
    };
    return (
        <div className="left">
            <div className="left_top">
                <div className="left_top_top">
                    <Link to='/home_teacher' className='icon_cs'>CS</Link>
                    <Link to='/home_teacher' className='quiz'>Quizzes Management</Link>
                </div>
                <div className="left_top_main">
                    <Link to='/home_teacher' className='mune'><FontAwesomeIcon icon={faHouse} className='icon_menu'/>Home</Link>
                    <Link to='/create_test_teacher' className='mune'><FontAwesomeIcon icon={faFile} className='icon_menu'/>Create Test Set</Link>
                    <Link to='/#' className='mune'><FontAwesomeIcon icon={faFilePen} className='icon_menu'/>Practice</Link>
                </div>
            </div>
            <div className="left_tail">
                <div className="left_main_tail">
                    <Link to='/#' className='mune'><FontAwesomeIcon icon={faFaceSmile} className='icon_menu'/>Profile</Link>
                    <button onClick={handleLogout} className='mune'><FontAwesomeIcon icon={faArrowRightFromBracket} className='icon_menu' />Logout</button>
                </div>
            </div>
        </div>
    )
}
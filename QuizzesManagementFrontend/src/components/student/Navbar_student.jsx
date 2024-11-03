import '../../styles/student/student.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,  faFilePen,
    faFaceSmile, faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons'

export default function Navbar_student() {
    return (
        <div className="left">
            <div className="left_top">
                <div className="left_top_top">
                    <Link to='/home_student' className='icon_cs'>CS</Link>
                    <Link to='/home_student' className='quiz'>Quizzes Management</Link>
                </div>
                <div className="left_top_main">
                    <Link to='/home_student' className='mune'><FontAwesomeIcon icon={faHouse} className='icon_menu'/>Home</Link>
                    <Link to='/#' className='mune'><FontAwesomeIcon icon={faFilePen} className='icon_menu'/>Practice</Link>
                </div>
            </div>
            <div className="left_tail">
                <div className="left_main_tail">
                    <Link to='/profile_student' className='mune'><FontAwesomeIcon icon={faFaceSmile} className='icon_menu'/>Profile</Link>
                    <Link to='/#' className='mune'><FontAwesomeIcon icon={faArrowRightFromBracket} className='icon_menu' />Logout</Link>
                </div>
            </div>
        </div>
    )
}
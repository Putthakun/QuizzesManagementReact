import '../../styles/student/student.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSquarePollVertical, faFilePen, faFile, 
    faFaceSmile, faArrowRightFromBracket, faBell,
    faCircleUser} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
    <div className="main">
        <div className="left">
            <div className="left_top">
                <div className="left_top_top">
                    <Link to='/home_student' className='icon_cs'>CS</Link>
                    <Link to='/home_student' className='quiz'>Quizzes Management</Link>
                </div>
                <div className="left_top_main">
                    <Link to='/#' className='mune'><FontAwesomeIcon icon={faHouse} className='icon_menu'/>Home</Link>
                    <Link to='/#' className='mune'><FontAwesomeIcon icon={faSquarePollVertical} className='icon_menu' />Dashboard</Link>
                    <Link to='/#' className='mune'><FontAwesomeIcon icon={faFile} className='icon_menu'/>Create Test Set</Link>
                    <Link to='/#' className='mune'><FontAwesomeIcon icon={faFilePen} className='icon_menu'/>Practice</Link>
                </div>
            </div>
            <div className="left_tail">
                <div className="left_main_tail">
                    <Link to='/#' className='mune'><FontAwesomeIcon icon={faFaceSmile} className='icon_menu'/>Home</Link>
                    <Link to='/#' className='mune'><FontAwesomeIcon icon={faArrowRightFromBracket} className='icon_menu' />Dashboard</Link>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="right_top">
                <div className="right_top_free"></div>
                <div className="right_top_tail">
                    <div className="right_top_tail_left">
                        <FontAwesomeIcon icon={faCircleUser} className='icon_user'/>
                        <div className="right_top_tail_left_right">
                            <p className="username">Firstname Lastname</p>
                            <p className="student">Student</p>
                        </div>
                    </div>
                    <div className="right_top_tail_right">
                        <FontAwesomeIcon icon={faBell} className='icon_menu'/>
                    </div>
                </div>
            </div>
            <div className="right_main">

            </div>
        </div>
    </div>
    )
}
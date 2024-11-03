import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faCircleUser } from '@fortawesome/free-solid-svg-icons'

function Navbar_top_teacher() {
  return (
    <>
        <div className="right_top">
            <div className="right_top_tail">
                <div className="right_top_tail_left">
                    <FontAwesomeIcon icon={faCircleUser} className='icon_user'/>
                    <div className="right_top_tail_left_right">
                        <p className="username">Firstname Lastname</p>
                        <p className="student">Teacher</p>
                    </div>
                </div>
                <div className="right_top_tail_right">
                    <FontAwesomeIcon icon={faBell} className='icon_menu'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar_top_teacher

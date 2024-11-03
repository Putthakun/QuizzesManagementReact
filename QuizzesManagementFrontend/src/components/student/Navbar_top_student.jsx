import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faCircleUser } from '@fortawesome/free-solid-svg-icons'

function Navbar_top({ firstname, lastname, user_type }) {
    return (
      <div className="right_top">
        <div className="right_top_tail">
          <div className="right_top_tail_left">
            <FontAwesomeIcon icon={faCircleUser} className='icon_user'/>
            <div className="right_top_tail_left_right">
              <p className="username">{firstname} {lastname}</p> {/* แสดง Firstname และ Lastname */}
              <p className="student">{user_type}</p> {/* แสดง User Type */}
            </div>
          </div>
          <div className="right_top_tail_right">
            <FontAwesomeIcon icon={faBell} className='icon_menu'/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar_top;

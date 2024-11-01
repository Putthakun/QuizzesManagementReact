import Navbar from "../student/navbar";
import '../../styles/student/home.css';
import Navbar_top from "../student/Navbar_top";

function Home_teacher() {
    return (
        <div>
            <div className="main_home">
            <Navbar/>
            <div className="main_home_right">
                <div className="main_home_right_top">
                    <Navbar_top/>
                </div>
                
                <div className="main_home_right_main">
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home_teacher

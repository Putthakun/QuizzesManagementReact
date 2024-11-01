import Navbar from "./navbar";
import '../../styles/student/home.css';
import Navbar_top from "./Navbar_top";

export default function Home_student(){

    return (
        <>
        <div className="main_home">
            <Navbar/>
            <div className="main_home_right">
                <div className="main_home_right_top">
                    <Navbar_top/>
                </div>
                <div className="main_home_right_main">
                    Main
                </div>
            </div>
        </div>
        </>
    )
}
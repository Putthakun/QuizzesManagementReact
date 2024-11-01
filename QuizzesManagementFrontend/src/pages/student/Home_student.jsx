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
                    <div className="search_box">
                        <input name="fsrch" id="fsrch" placeholder="Search for any subjects" />
                    </div>
                    <div className="subset_subject">
                        <div className="circle_subject">
                            <div className="circle"></div>
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
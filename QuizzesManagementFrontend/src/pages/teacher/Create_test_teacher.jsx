import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher"
import Navbar_teacher from "../../components/teacher/Navbar_teacher"

function Create_test_teacher() {
    return (
        <div>
            <div className="main_home">
                <Navbar_teacher/>
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_teacher/>
                    </div>
                    
                    <div className="main_right_subject_teacher">
                        CrateTest
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create_test_teacher

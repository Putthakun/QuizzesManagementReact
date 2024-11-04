import Navbar_student from "../../components/student/Navbar_student";
import '../../styles/student/ans.css';
import Navbar_top_student from "../../components/student/Navbar_top_student";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

function Ans_student() {

    const submitAns = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "you won't be able to go back and make changes!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, sure!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Success!",
                text: "Good Luck!!!",
                icon: "success"
              });
            }
          });
    }

return (
    <div>
        <div className="main_home">
            <Navbar_student/>
            <div className="main_home_right">
                <div className="main_home_right_top">
                    <Navbar_top_student/>
                </div>
                    
                {/* <div className="main_right_ans">
                    <div className="main_right_box_ans">
                        <div className="main_right_multi_head">
                            <div className="main_right_multi_head_box_left">
                                <div className="main_right_multi_head_left">
                                
                                </div>
                                <div className="main_right_multi_head_right">
                                    <div className="main_right_multi_head_right_top">
                                        <p>Maths</p>
                                    </div>
                                    <div className="main_right_multi_head_right_bottom">
                                        <p>Calculus 2  Pre Test - Yay</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main_right_multi_head_box_right">
                                <p>เวลาที่เหลือ</p><p>04:23/180:00</p>
                            </div>
                        </div>
                        
                        <div className="main_right_multi_main">
                            <div className="main_right_multi_main_box">
                                <div className="main_right_multi_main_box_head">
                                    <div className="main_right_multi_main_box_head_left">
                                        <h3>Questions 4</h3><p>*</p>
                                    </div>
                                    <div className="main_right_multi_main_box_head_right">
                                        1 + 1 = ?
                                    </div>
                                </div>
                                <div className="main_right_multi_main_box_main">
                                    <div className="main_right_multi_main_box_main_head">
                                        <h3>Choose your choices</h3><p>*</p>
                                    </div>
                                    <div className="main_right_multi_main_box_main_main">
                                        <form action="" className="form_main">
                                            <div className="form_1">
                                                <input type="radio" value="1" name="check_box" />
                                                <label >1</label>
                                            </div>
                                            <div className="form_1">
                                                <input type="radio" value="2" name="check_box" />
                                                <label >2</label>
                                            </div>
                                            <div className="form_1">
                                                <input type="radio" value="3" name="check_box" />
                                                <label >3</label>
                                            </div>
                                            <div className="form_1">
                                                <input type="radio" value="4" name="check_box" />
                                                <label >4</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="main_right_multi_main_box_tail">
                                </div>
                                <div className="main_right_multi_main_box_submit">
                                    <div className="main_right_multi_main_box_submit_main">
                                        <div className="box_free"></div>
                                        <div className="main_right_multo_main_box_submit_page">
                                            <div className="main_right_multi_main_box_submit_main_head">
                                                4/20
                                            </div>
                                            <div className="main_right_multi_main_box_submit_main_tail">
                                                <FontAwesomeIcon icon={faArrowLeft} className="icon_ans" />

                                                <FontAwesomeIcon icon={faArrowRight} className="icon_ans" />
                                            </div>
                                        </div>
                                        <div className="box_end_test">
                                            Submit
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    

                </div> */}

                <div className="main_right_ans2">
                    <div className="main_right_box_ans">
                        <div className="main_right_multi_head">
                            <div className="main_right_multi_head_box_left">
                                <div className="main_right_multi_head_left">
                                
                                </div>
                                <div className="main_right_multi_head_right">
                                    <div className="main_right_multi_head_right_top">
                                        <p>Maths</p>
                                    </div>
                                    <div className="main_right_multi_head_right_bottom">
                                        <p>Calculus 2  Pre Test - Yay</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main_right_multi_head_box_right">
                                <p>เวลาที่เหลือ</p><p>04:23/180:00</p>
                            </div>
                        </div>
                        
                        <div className="main_right_multi_main">
                            <div className="main_right_multi_main_box">
                                <div className="main_right_multi_main_box_head">
                                    <div className="main_right_multi_main_box_head_left">
                                        <h3>Questions 4</h3><p>*</p>
                                    </div>
                                    <div className="main_right_multi_main_box_head_right">
                                        1 + 1 = ?
                                    </div>
                                </div>
                                <div className="main_right_multi_main_box_main">
                                    <div className="main_right_multi_main_box_main_head">
                                        <h3>Choose your choices</h3><p>*</p>
                                    </div>
                                    <div className="main_right_multi_main_box_main_main">
                                        <form action="" className="form_main">
                                            <div className="form_1">
                                                <input type="radio" value="1" name="check_box" />
                                                <label >1</label>
                                            </div>
                                            <div className="form_1">
                                                <input type="radio" value="2" name="check_box" />
                                                <label >2</label>
                                            </div>
                                            <div className="form_1">
                                                <input type="radio" value="3" name="check_box" />
                                                <label >3</label>
                                            </div>
                                            <div className="form_1">
                                                <input type="radio" value="4" name="check_box" />
                                                <label >4</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="main_right_multi_main_box_tail">
                                </div>
                                
                            </div>
                        </div>

                        <div className="main_right_multi_main">
                            <div className="main_right_multi_main_box">
                                <div className="main_right_multi_main_box_head">
                                    <div className="main_right_multi_main_box_head_left">
                                        <h3>Questions 4</h3><p>*</p>
                                    </div>
                                    <div className="main_right_multi_main_box_head_right">
                                        1 + 1 = ?
                                    </div>
                                </div>
                                <div className="main_right_multi_main_box_main">
                                    <div className="main_right_multi_main_box_main_head">
                                        <h3>Choose your choices</h3><p>*</p>
                                    </div>
                                    <div className="main_right_multi_main_box_main_main">
                                        <form action="" className="form_main">
                                            <div className="form_1">
                                                <input type="radio" value="1" name="check_box" />
                                                <label >1</label>
                                            </div>
                                            <div className="form_1">
                                                <input type="radio" value="2" name="check_box" />
                                                <label >2</label>
                                            </div>
                                            <div className="form_1">
                                                <input type="radio" value="3" name="check_box" />
                                                <label >3</label>
                                            </div>
                                            <div className="form_1">
                                                <input type="radio" value="4" name="check_box" />
                                                <label >4</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="main_right_multi_main_box_tail">
                                </div>
                                
                            </div>
                        </div>

                        <button onClick={submitAns} className="box_end_test">
                            Submit
                        </button>
                    </div>
                    

                </div>

            </div>
        </div>
    </div>
)
}

export default Ans_student

import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher"
import Navbar_teacher from "../../components/teacher/Navbar_teacher"
import "../../styles/teacher/create_test_teacher.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faTrash
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"

function Create_test_teacher() {

    const [multiorfill, setMultiorfill] = useState('');

    useEffect(() => {
        console.log(multiorfill);
    }, [multiorfill])

    return (
        <div>
            <div className="main_home">
                <Navbar_teacher/>
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_teacher/>
                    </div>
                    
                    <div className="main_right_test_teacher">
                        <div className="main_right_test_teacher_container">
                            <div className="main_right_test_teacher_top">
                                <button className="btn_create_test">
                                    Create Test
                                </button>
                            </div>
                            <div className="main_right_test_teacher_box">
                                <div className="main_right_test_teacher_box_top">
                                    <div className="main_right_test_teacher_box_top_left">
                                        <FontAwesomeIcon icon={faCircleQuestion} className="icon_question" />
                                        <p>Question 1*</p>
                                    </div>
                                    <div className="main_right_test_teacher_box_top_right">
                                        <div className="main_right_test_teacher_box_top_right_multi">
                                            <input type="radio" value="multi" name="multiorfill" onChange={ (e) => setMultiorfill(e.target.value)}/>
                                            <label htmlFor="multi">Multiple choice</label>
                                        </div>
                                        <div className="main_right_test_teacher_box_top_right_fill">
                                            <input type="radio" value="fill" name="multiorfill" onChange={ (e) => setMultiorfill(e.target.value)}/>
                                            <label htmlFor="fill">Fill in the blank</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="main_right_test_teacher_box_question">
                                    <div className="main_right_test_teacher_box_question_left">
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </div>
                                    <div className="main_right_test_teacher_box_question_right">
                                        <input type="file" id="myFile" name="filename" />
                                    </div>
                                </div>
                                <div className="main_right_test_teacher_box_choice_head">
                                    <p>Choice</p>
                                </div>
                                <form action="#" method="post" className="main_right_test_teacher_box_choice_main">
                                    <div className="main_right_test_teacher_box_choice_main_choice">
                                        <input type="radio" />
                                        <label htmlFor="">40</label>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </div>

                                    <div className="main_right_test_teacher_box_choice_main_choice">
                                        <input type="radio" />
                                        <label htmlFor="">41</label>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </div>

                                    <div className="main_right_test_teacher_box_choice_main_choice">
                                        <input type="radio" />
                                        <label htmlFor="">42</label>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </div>

                                    <div className="main_right_test_teacher_box_choice_main_choice">
                                        <input type="radio" />
                                        <label htmlFor="">43</label>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </div>
                                </form>
                                <div className="main_right_test_teacher_box_choice_add_choice">
                                    <button>
                                        <p>+ Add choice</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create_test_teacher

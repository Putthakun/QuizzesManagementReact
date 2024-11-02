import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher"
import Navbar_teacher from "../../components/teacher/Navbar_teacher"
import "../../styles/teacher/create_test_teacher.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function Create_test_teacher() {

    const [data, setData] = useState([{multi:"", fill:""}])
    const [choice, setChoice] = useState([{ choices: [""] }])

    const addQuestion = () => {
        setData([...data,{multi:"", fill:""}])
    }

    const addChoice = () => {
        setChoice([...choice,{choices: [""]}])
    }
    const handelDelete = (i) => {
        const deleteVal = [...data]
        deleteVal.splice(i, 1)
        setData(deleteVal)
    }
    const handelChange = (e, i) => {
        const {name, value} = e.target
        const onchangeVal = [...data]
        onchangeVal[i][name] = value
        setData(onchangeVal)
    }

    const handelDeleteChoice = (i) => {
        const deleteVal = [...choice]
        deleteVal.splice(i, 1)
        setChoice(deleteVal)
    }

    const handleSubmit = () => {
        const quizData = {
            questions: data,
            choices: choice,
        };
        console.log("Submitting Data: ", quizData);

        // ส่ง `quizData` ไปยัง backend หรือ API ตามที่ต้องการ
    };


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
                                <button className="btn_create_test" onClick={handleSubmit}>
                                    Create Test
                                </button>
                                <button className="btn_create_test" onClick={addQuestion}>
                                    Add Question
                                </button>
                            </div>

                            {
                                data.map((val, i) => 
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="main_right_test_teacher_box">
                                        <div className="main_right_test_teacher_box_top">
                                            <div className="main_right_test_teacher_box_top_left">
                                                <FontAwesomeIcon icon={faCircleQuestion} className="icon_question" />
                                                <p>Question {i+1}*</p>
                                            </div>
                                            <div className="main_right_test_teacher_box_top_right">
                                                <div className="main_right_test_teacher_box_top_right_multi">
                                                    <input type="radio" value={val.multi} name="multiorfill" onChange={ (e) => handelChange(e, i)}/>
                                                    <label htmlFor="multi">Multiple choice</label>
                                                </div>
                                                <div className="main_right_test_teacher_box_top_right_fill">
                                                    <input type="radio" value={val.fill} name="multiorfill" onChange={ (e) => handelChange(e, i)}/>
                                                    <label htmlFor="fill">Fill in the blank</label>
                                                </div>
                                                <div className="main_right_test_teacher_box_top_right_fill">
                                                    <button onClick={()=>handelDelete(i)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main_right_test_teacher_box_question">
                                            <div className="main_right_test_teacher_box_question_left">
                                                <textarea name="" id=""></textarea>
                                            </div>
                                            <div className="main_right_test_teacher_box_question_right">
                                                <input type="file" id="myFile" name="filename" />
                                            </div>
                                        </div>
                                        <div className="main_right_test_teacher_box_choice_head">
                                            <p>Choice</p><p className="choice_star">*</p>
                                        </div>
                                        {choice.map((val, i) => 
                                            // eslint-disable-next-line react/jsx-key
                                            <div className="main_right_test_teacher_box_choice_main">
                                                <div className="main_right_test_teacher_box_choice_main_choice">
                                                    <input type="radio" value={val.choices} name="choices" />
                                                    <input type="text" className="label"/>
                                                    <FontAwesomeIcon icon={faTrashCan} className="trash" onClick={()=>handelDeleteChoice(i)}/>
                                                </div>
                                            </div>
                                        )}
                                        <div className="main_right_test_teacher_box_choice_add_choice">
                                            <button className="btn_add_choice" onClick={addChoice}>
                                                <p>+ Add choice</p>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }

                            

                            {/* <div className="main_right_test_teacher_box">
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
                                        <textarea name="" id=""></textarea>
                                    </div>
                                    <div className="main_right_test_teacher_box_question_right">
                                        <input type="file" id="myFile" name="filename" />
                                    </div>
                                </div>
                                <div className="main_right_test_teacher_box_choice_head">
                                    <p>Choice</p><p className="choice_star">*</p>
                                </div>
                                <form action="#" method="post" className="main_right_test_teacher_box_choice_main">
                                    <div className="main_right_test_teacher_box_choice_main_choice">
                                        <input type="radio" value="40" name="ans" onChange={ (e) => setAns(e.target.value)}/>
                                        <label htmlFor="">40</label>
                                        <FontAwesomeIcon icon={faTrashCan} className="trash"/>
                                    </div>

                                    <div className="main_right_test_teacher_box_choice_main_choice">
                                        <input type="radio" value="41" name="ans" onChange={ (e) => setAns(e.target.value)}/>
                                        <label htmlFor="">41</label>
                                        <FontAwesomeIcon icon={faTrashCan} className="trash"/>
                                    </div>

                                    <div className="main_right_test_teacher_box_choice_main_choice">
                                        <input type="radio" value="42" name="ans" onChange={ (e) => setAns(e.target.value)}/>
                                        <label htmlFor="">42</label>
                                        <FontAwesomeIcon icon={faTrashCan} className="trash"/>
                                    </div>

                                    <div className="main_right_test_teacher_box_choice_main_choice">
                                        <input type="radio" value="43" name="ans" onChange={ (e) => setAns(e.target.value)}/>
                                        <label htmlFor="">43</label>
                                        <FontAwesomeIcon icon={faTrashCan} className="trash" />
                                    </div>
                                </form>
                                <div className="main_right_test_teacher_box_choice_add_choice">
                                    <button className="btn_add_choice">
                                        <p>+ Add choice</p>
                                    </button>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create_test_teacher

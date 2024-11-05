import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar_student from "../../components/student/Navbar_student";
import '../../styles/student/ans.css';
import Navbar_top_student from "../../components/student/Navbar_top_student";
import { useNavigate} from "react-router-dom";

function Ans_student() {

    const navigate = useNavigate(); // สร้างฟังก์ชันนำทาง
    // const { examId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState({}); // State สำหรับเก็บคำตอบที่นักเรียนเลือก
    const user_id = sessionStorage.getItem('user_id');
    const { id, examId } = useParams();

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/exams/${examId}/questions/`);
                const data = response.data;
                
                if (Array.isArray(data)) {
                    console.log("Setting questions state with data:", data);
                    setQuestions(data);
                } else {
                    console.error("Data is not an array:", data);
                }
            } catch (error) {
                console.error("Error fetching questions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [examId]);

    const handleAnswerChange = (questionId, choiceId) => {
        setAnswers({
            ...answers,
            [questionId]: choiceId, // เก็บคำตอบสำหรับคำถามแต่ละข้อ
        });
    };

    const submitAns = async () => {
        // สร้างข้อมูลสำหรับส่งไปยัง API
        const answerData = Object.keys(answers).map((questionId) => ({
            exam: parseInt(examId, 10), // แปลงเป็นตัวเลข (จาก examId)
            question: parseInt(questionId, 10), // แปลง questionId เป็นตัวเลข
            selected_choice: answers[questionId], // ตัวเลือกที่นักเรียนเลือก (ควรเป็นตัวเลข)
            student: user_id, // ID ของนักเรียน
        }));
        
        console.log(answerData)

        try {
            const response = await axios.post(`http://localhost:8000/api/answers/`, answerData);
            Swal.fire({
                title: "Success!",
                text: "Your answers have been submitted!",
                icon: "success",
            });
            navigate(`/subject_student/${id}`)
        } catch (error) {
            console.error("Error submitting answers:", error);
            Swal.fire({
                title: "Error!",
                text: "There was an error submitting your answers.",
                icon: "error",
            });
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <div className="main_home">
                <Navbar_student/>
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_student/>
                    </div>
                    <div className="main_right_ans2">
                        <div className="main_right_box_ans">

                            {/* Map questions dynamically */}
                            {questions.map((question, index) => (
                                <div key={question.id} className="main_right_multi_main">
                                    <div className="main_right_multi_main_box">
                                        <div className="main_right_multi_main_box_head">
                                            <div className="main_right_multi_main_box_head_left">
                                                <h3>Question {index + 1}</h3><p>*</p>
                                            </div>
                                            <div className="main_right_multi_main_box_head_right">
                                                {question.question_text}
                                            </div>
                                        </div>
                                        <div className="main_right_multi_main_box_main">
                                            <div className="main_right_multi_main_box_main_head">
                                                <h3>Choose your choices</h3><p>*</p>
                                            </div>
                                            <div className="main_right_multi_main_box_main_main">
                                                <form action="" className="form_main">
                                                    {/* Map choices dynamically for each question */}
                                                    {question.choices.map((choice) => (
                                                        <div key={choice.id} className="form_1">
                                                            <input
                                                                type="radio"
                                                                value={choice.id} // เปลี่ยน value เป็น ID ของ choice
                                                                name={`question_${question.id}`}
                                                                onChange={() => handleAnswerChange(question.id, choice.id)} // อัปเดตคำตอบ
                                                            />
                                                            <label>{choice.choice_text}</label>
                                                        </div>
                                                    ))}
                                                </form>
                                            </div>
                                        </div>
                                        <div className="main_right_multi_main_box_tail"></div>
                                    </div>
                                </div>
                            ))}

                            <button onClick={submitAns} className="box_end_test">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ans_student;

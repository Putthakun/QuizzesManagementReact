import Navbar_student from "../../components/student/Navbar_student";
import '../../styles/student/subject.css';
import { Link } from "react-router-dom";
import Navbar_top_student from "../../components/student/Navbar_top_student";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck, faBook, faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

function Subject_student() {

    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [subjects, setSubject] = useState([]);
    const [error, setError] = useState('');
    const { id } = useParams();
    const [exams, setExams] = useState([]);
    const [modal_result, setModal_result] = useState(false);
    const [selectedExam, setSelectedExam] = useState(null);
    const [examResults, setExamResults] = useState(null); // State to store fetched results
    const correctAnswersCount = examResults && Array.isArray(examResults) 
    ? examResults.filter(result => result.is_correct).length 
    : 0;
const incorrectAnswersCount = examResults && Array.isArray(examResults) 
    ? examResults.filter(result => !result.is_correct).length 
    : 0;
const totalQuestions = examResults && Array.isArray(examResults) 
    ? examResults.length 
    : 0;

    useEffect(() => {
        const fetchSubjectDetails = async () => {
            console.log("Subject ID:", id);
            try {
                const response = await axios.get(`http://localhost:8000/api/subjects/code/${id}/`);
                setSubject(response.data);
                console.log(response.data);
                setError('');

                // Fetch exams for the subject
                const examResponse = await axios.get(`http://localhost:8000/api/listexams/${id}/`);
                if (examResponse.status === 200) {
                    setExams(examResponse.data);
                    console.log("Fetched exams:", examResponse.data);
                } else {
                    throw new Error('Failed to fetch exams');
                }

            } catch (error) {
                setError('An error occurred while fetching subject details.');
            }
        };

        fetchSubjectDetails();
    }, [id]);

    const toggleModal = () => {
        setModal(!modal);
    }

    const handleTakeTestClick = (examId) => {
        navigate(`/subject_student/${id}/ans_student/${examId}`);
    }

    const toggleModal_result = async (exam) => {
        setSelectedExam(exam);
        setModal_result(!modal_result);

        // Fetch exam results
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/exams/${exam.id}/results/`);
            setExamResults(response.data.results); // Set the fetched results
            console.log("Fetched results:", response.data);
        } catch (error) {
            console.error("Error fetching exam results:", error);
            setExamResults([]); // Reset if error occurs
        }
    };

    return (
        <div>
            <div className="main_home">
                <Navbar_student />
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_student />
                    </div>

                    <div className="main_right_subject_teacher">
                        <div className="main_right_teacher_box_container_subject">
                            <div className="main_right_teacher_subject_top">
                                <div className="main_right_teacher_subject_top_circle"></div>
                                <div className="main_right_teacher_subject_top_name">
                                    {subjects.map(subject => (
                                        <div key={subject.code}>
                                            <h3>{subject.code} {subject.name}</h3>
                                            <p>{subject.teacher ? subject.teacher.split(' - ')[0] : "Unknown Teacher"}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="main_right_box_subject_test_container">
                                {exams.length > 0 ? (
                                    exams.map((exam) => (
                                        <div className="main_right_subject_result_container" key={exam.id}>
                                            <div className="main_right_box_subject_teacher">
                                                <div className="main_right_box_subject_main">
                                                    <div className="main_right_box_subject_main_box">
                                                        <div className="main_right_box_subject_main_box_left">
                                                            <div className="main_right_box_subject_main_box_left_head">
                                                                <div className="main_right_box_subject_main_box_left_head_circle"></div>
                                                            </div>
                                                            <i className="fa-regular fa-face-smile"></i>
                                                        </div>
                                                        <div className="main_right_box_subject_main_box_right">
                                                            <div className="main_right_box_subject_main_box_right_head">
                                                                <p>Teacher</p>
                                                                <button className="btn-result" onClick={() => toggleModal_result(exam)}>Result</button>
                                                            </div>
                                                            <div className="main_right_box_subject_main_box_right_main">
                                                                <div className="main_right_box_subject_main_box_right_main_head_teacher">
                                                                    <h3>{exam.title}</h3>
                                                                    <p>Due Date: {exam.due_date}</p>
                                                                </div>
                                                                <div className="main_right_box_subject_main_box_right_main_main">
                                                                    <p>{exam.description}</p>
                                                                </div>
                                                            </div>
                                                            <div className="main_right_box_subject_main_box_right_tail_teacher">
                                                                <div className="main_right_box_subject_main_box_right_tail_left_teacher">
                                                                    <p>Add your reaction</p>
                                                                </div>
                                                                <div className="main_right_box_subject_main_box_right_tail_right_student">
                                                                    <p>Score: {exam.score}</p>
                                                                    <button onClick={() => handleTakeTestClick(exam.id)}>Take Test</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="main_right_subject_result_container_no">
                                        <div className="main_right_box_subject_test_box">
                                            <FontAwesomeIcon icon={faBook} className="icon_book" />
                                            <h3>No exams available for this subject.</h3>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <div className="popup_container_subject_student">
                    <div className="popup_container_box_subject_student">
                        <div className="popup_box_subject_student">
                            <div className="main_right_text_take_test">
                                <h2>Test Rules</h2>
                            </div>
                            <div className="main_right_box_take_test">
                                <div className="main_right_box_take_test_main">
                                    <div className="main_right_box_take_test_main_head">
                                        <div className="main_right_box_take_test_main_head_left"></div>
                                        <div className="main_right_box_take_test_main_head_right">
                                            <div className="main_right_box_take_test_main_head_right_top">
                                                <p>Maths</p>
                                            </div>
                                            <div className="main_right_box_take_test_main_head_right_bottom">
                                                <p>Calculus 2 Pre Test - Yay</p><p>100 scores</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_right_box_take_test_main_box">
                                        <p>Test rules</p>
                                        <p>1. No cheating.</p>
                                        <p>2. No electronic devices allowed.</p>
                                        <p>3. If caught, you'll be disqualified.</p>
                                        <p>4. Please finish within the time limit.</p>
                                    </div>
                                    <div className="main_right_box_take_test_main_tail">
                                        <div className="main_right_box_take_test_main_tail_box">
                                            <button onClick={toggleModal} className="cancle">Cancel</button>
                                        </div>
                                        <div className="main_right_box_take_test_main_tail_box"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {modal_result && selectedExam && (
                <div className="popup_container_subject_student_result">
                    <div className="popup_container_box_subject_student_result">
                        <div className="popup_box_subject_student_result">
                            <div className="popup_box_left">
                                <div className="popup_box_left_circle"></div>
                            </div>

                            <div className="popup_box_right_result" >
                                <div className="popup_box_right_head_result">
                                    <div className="popup_box_right_head_top_result">
                                        <div className="popup_box_right_head_top_top_result">
                                            <p>{selectedExam.title}</p>
                                        </div>
                                        <div className="popup_box_right_head_top_tail_result">
                                            <p>{selectedExam.description}</p>
                                        </div>
                                    </div>
                                    <div className="popup_box_right_head_tail_result">
                                        <div className="popup_box_right_head_tail_left_result">
                                            <p>วันครบกำหนด: {selectedExam.due_date}</p>
                                        </div>
                                        <div className="popup_box_right_head_tail_right_result">
                                            <div className="popup_box_right_head_tail_right_correct_result">
                                                <p>จำนวนข้อที่ถูก</p>
                                                <p className="cor">Correct</p>
                                                <p className="score">{correctAnswersCount}</p>
                                            </div>
                                            <div className="popup_box_right_head_tail_right_correct_result">
                                                <p>จำนวนข้อที่ถูก</p>
                                                <p className="incor">Incorrect</p>
                                                <p className="score">{incorrectAnswersCount}</p>
                                            </div>
                                            <div className="popup_box_right_head_tail_right_correct_result">
                                                <p>จำนวนข้อที่ถูก</p>
                                                <p className="ans">Answered</p>
                                                <p className="score">{correctAnswersCount}/{totalQuestions}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="popup_box_right_main_result">
                                    {Array.isArray(examResults) && examResults.length > 0 ? (
                                        examResults.map((result, index) => (
                                            <div key={index} className="result_item">
                                                <div className="popup_box_right_main_box_result">
                                                    <div className="popup_box_right_main_box_top_result">
                                                        <div className="popup_box_right_main_box_top_left_result">
                                                            <p>Question {index + 1} •</p><p>{result.question}</p>
                                                        </div>

                                                    </div>
                                                    <div className="popup_box_right_main_box_tail_result">
                                                        <p>Selected choice: {result.selected_choice}</p>
                                                        <p>
                                                            Is correct: {result.is_correct ? (
                                                                <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} />
                                                            ) : (
                                                                <FontAwesomeIcon icon={faCircleXmark} style={{ color: 'red' }} />
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* <p>Question: {result.question}</p> */}

                                            </div>
                                        ))
                                    ) : (
                                        <p>No results available.</p>
                                    )}
                                </div>
                                {/* <div className="popup_box_right_main_result">
                                    <div className="popup_box_right_main_box_result">
                                        <div className="popup_box_right_main_box_top_result">
                                            <div className="popup_box_right_main_box_top_left_result">
                                                <p>Question 3 •</p><p><FontAwesomeIcon icon={faCircleCheck} className="true" /></p>
                                            </div>
                                        </div>
                                        <div className="popup_box_right_main_box_tail_result">
                                            <p>{result.question}</p>
                                        </div>
                                    </div>

                                    <div className="popup_box_right_main_box_result">
                                        <div className="popup_box_right_main_box_top_result">
                                            <div className="popup_box_right_main_box_top_left_result">
                                                <p>Question 4 •</p><p><FontAwesomeIcon icon={faCircleCheck} className="true" /></p>
                                            </div>
                                        </div>
                                        <div className="popup_box_right_main_box_tail_result">
                                            <p>1 + 1 = ?</p>
                                        </div>
                                    </div>

                                    <div className="popup_box_right_main_box_result">
                                        <div className="popup_box_right_main_box_top_result">
                                            <div className="popup_box_right_main_box_top_left_result">
                                                <p>Question 5 •</p><p><FontAwesomeIcon icon={faCircleXmark} className="false" /></p>
                                            </div>
                                        </div>
                                        <div className="popup_box_right_main_box_tail_result">
                                            <p>1 + 1 = ?</p>
                                        </div>
                                    </div>


                                    <div className="popup_box_right_main_box_result">
                                        <div className="popup_box_right_main_box_top_result">
                                            <div className="popup_box_right_main_box_top_left_result">
                                                <p>Question 6 •</p><p><FontAwesomeIcon icon={faCircleCheck} className="true" /></p>
                                            </div>
                                        </div>
                                        <div className="popup_box_right_main_box_tail_result">
                                            <p>1 + 1 = ?</p>
                                        </div>
                                    </div>

                                    <div className="popup_box_right_main_box_result">
                                        <div className="popup_box_right_main_box_top_result">
                                            <div className="popup_box_right_main_box_top_left_result">
                                                <p>Question 7 •</p><p><FontAwesomeIcon icon={faCircleXmark} className="false" /></p>
                                            </div>
                                        </div>
                                        <div className="popup_box_right_main_box_tail_result">
                                            <p>1 + 1 = ?</p>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="popup_box_right_tail_result">
                                    <button className="popup_box_right_tail_btn" onClick={toggleModal_result}>
                                        Done
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}

export default Subject_student;
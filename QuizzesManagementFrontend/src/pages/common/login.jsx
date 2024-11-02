import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import coverImage from '../../assets/images/cover.png';
import '../../styles/common/register.css';


function Login() {

    const [role, setRole] = useState("student");
    const navigate = useNavigate();
    const [studentId, setStudentId] = useState("");
    const [teacherId, setTeacherId] = useState("");
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('student'); 
    const [errorMessage, setErrorMessage] = useState('');

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const userType = role;
        const id = role === "student" ? studentId : teacherId;

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/blog/login/', { user_type: userType, id, password });
            alert(response.data.message); 
            setErrorMessage(''); 
            navigate(userType === "student" ? '/home_student' : '/home_teacher');
        } catch (error) {
            if (error.response) {
                const errorData = error.response.data.error;
                setErrorMessage(errorData); 
            }
        }
    };

    return (
        <div className="register_login">
            <div className="grid grid-cols-2 drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)] bg-white rounded-3xl">
                <div className="max-w-lg">
                    <img src={coverImage} className="max-w-full h-auto rounded-lg" alt="Cover" />
                </div>
                <div className="flex flex-col items-center h-full py-8">
                    <h1 className="font-bold text-3xl mt-4">Login!</h1>
                    <div className="flex flex-col items-center">
                        <label className="mt-20">Role:</label>
                        <div className="flex mt-2">
                            <label className="mr-6">
                                <input
                                    type="radio"
                                    value="student"
                                    checked={role === "student"}
                                    onChange={handleRoleChange}
                                    className="hidden peer "
                                />
                                <span className={`inline-block cursor-pointer rounded-full border-2 p-2 text-center  ${role === "student" ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"} transition duration-150 ease-in-out`}>
                                    Student
                                </span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="teacher"
                                    checked={role === "teacher"}
                                    onChange={handleRoleChange}
                                    className="hidden peer transition duration-150 ease-in-out"
                                />
                                <span className={`inline-block cursor-pointer rounded-full border-2 p-2 text-center  ${role === "teacher" ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"}  transition duration-150 ease-in-out`}>
                                    Teacher
                                </span>
                            </label>
                        </div>
                        {role === "student" && (
                            <div className="mt-6">
                                <label className="block">*Student ID:</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md p-1 w-80 mt-1"
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value)}
                                />
                                <label className="block mt-4">*Password:</label>
                                <input
                                    type="password"
                                    className="border border-gray-300 rounded-md p-1 w-80 mt-1"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="flex mt-1">
                                    <div>No account ?</div>
                                    <Link to="/register" className="ml-1 text-blue-500">Crate account</Link>
                                </div>
                                {errorMessage && (
                                    <p className="text-red-500 mt-1">
                                        {errorMessage.teacher_id && errorMessage.teacher_id[0]}
                                        {errorMessage.student_id && errorMessage.student_id[0]}
                                        {errorMessage.password && errorMessage.password[0]}
                                        {errorMessage.user_type && errorMessage.user_type[0]}
                                    </p>
                                )}

                            </div>
                        )}

                        {role === "teacher" && (
                            <div className="mt-6">
                                <label className="block">*Teacher ID:</label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md p-1 w-80 mt-1"
                                    value={teacherId}
                                    onChange={(e) => setTeacherId(e.target.value)}
                                />
                                <label className="block mt-4">*Password:</label>
                                <input
                                    type="password"
                                    className="border border-gray-300 rounded-md p-1 w-80 mt-1"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="flex mt-1">
                                    <div>No account ?</div>
                                    <Link to="/register" className="ml-1 text-blue-500">Crate account</Link>
                                </div>
                                {errorMessage && (
                                    <p className="text-red-500 mt-1">
                                        {errorMessage.teacher_id && errorMessage.teacher_id[0]}
                                        {errorMessage.student_id && errorMessage.student_id[0]}
                                        {errorMessage.password && errorMessage.password[0]}
                                        {errorMessage.user_type && errorMessage.user_type[0]}
                                    </p>
                                )}

                            </div>
                        )}

                        <div className="mt-8">
                            <button
                                className="bg-blue-500 p-2 w-64 rounded-full text-white font-medium text-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                                onClick={handleLogin}
                            >Login Now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

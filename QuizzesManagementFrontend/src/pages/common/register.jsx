import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../styles/common/register.css';
import coverImage from '../../assets/images/cover.png';


function Register() {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [role, setRole] = useState("student");
    const [userType, setUserType] = useState("student");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [studentId, setStudentId] = useState("");
    const [teacherId, setTeacherId] = useState("");

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            user_type: userType,
            firstname,
            lastname,
            password,
            student_id: userType === "student" ? studentId : undefined,
            teacher_id: userType === "teacher" ? teacherId : undefined,
        };
        console.log("get data form", formData)

        try {
            if (userType === "student") {
                const response = await axios.post('http://127.0.0.1:8000/api/blog/register/students/', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                console.log('Success:', response.data);
            } else {
                const response = await axios.post('http://127.0.0.1:8000/api/blog/register/teacher/', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('Success:', response.data);
            }
            alert('Registration successful! You can now log in.');
            navigate('/login');
        } catch (error) {
            if (error.response) {
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data); // เก็บ error message จาก backend
                }
            } else {
                console.error('Error:', error.message);
                alert('Registration failed. Please try again.');
            }
        }
    };




    return (
        <div className="grid grid-cols-2 drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)] bg-white  rounded-3xl ">

            <div className="max-w-lg">
                <img src={coverImage} className="max-w-full h-auto rounded-lg"></img>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-3xl mt-8">Create Account!</h1>
                <label className="mt-6">Role:</label>
                <div className="flex mt-2">
                    <label className="mr-6">
                        <input
                            type="radio"
                            value="student"
                            checked={role === "student"}
                            onChange={(e) => {
                                handleRoleChange(e);
                                setUserType(e.target.value);
                            }}
                            className="hidden peer"
                        />
                        <span className={`inline-block cursor-pointer rounded-full border-2 p-2 text-center ${role === "student" ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"} transition-colors duration-300`}>
                            Student
                        </span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="teacher"
                            checked={role === "teacher"}
                            onChange={(e) => {
                                handleRoleChange(e);
                                setUserType(e.target.value);
                            }}
                            className="hidden peer" // ซ่อน input
                        />
                        <span className={`inline-block cursor-pointer rounded-full border-2 p-2 text-center ${role === "teacher" ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"} transition-colors duration-300`}>
                            Teacher
                        </span>
                    </label>
                </div>
                {role === "student" && (
                    <div className="mt-6 ">
                        <label className="block">*Student ID:</label>
                        <input
                            type="text"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                        />
                        {errorMessage.student_id && (
                            <p className="text-red-500 mt-1">{errorMessage.student_id[0]}</p>
                        )}

                        <label className="block mt-4">*Firstname:</label>
                        <input
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                        />
                         {errorMessage.firstname && (
                            <p className="text-red-500 mt-1">{errorMessage.firstname[0]}</p>
                        )}

                        <label className="block mt-4">*Lastname:</label>
                        <input
                            type="text"
                            onChange={(e) => setLastname(e.target.value)}
                            className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                        />
                          {errorMessage.firstname && (
                            <p className="text-red-500 mt-1">{errorMessage.lastname[0]}</p>
                        )}

                        <label className="block mt-4">*Password:</label>
                        <input
                            type="text"
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                        />
                         {errorMessage.password && (
                            <p className="text-red-500 mt-1">{errorMessage.password[0]}</p>
                        )}

                        <div className="flex mt-1">
                            <div>Already have an account ?</div>
                            <Link to="/login" className="ml-1 text-blue-500">Log in</Link>
                        </div>
                    </div>
                )}


                {role === "teacher" && (
                    <div className="mt-6 ">
                        <label className="block">*Teacher ID:</label>
                        <input
                            type="text"
                            onChange={(e) => setTeacherId(e.target.value)}
                            className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                        />
                         {errorMessage.teacher_id && (
                            <p className="text-red-500 mt-1">{errorMessage.teacher_id[0]}</p>
                        )}

                        <label className="block mt-4">*Firstname:</label>
                        <input
                            type="text"
                            onChange={(e) => setFirstname(e.target.value)}
                            className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                        />
                         {errorMessage.firstname && (
                            <p className="text-red-500 mt-1">{errorMessage.firstname[0]}</p>
                        )}

                        <label className="block mt-4">*Lastname:</label>
                        <input
                            type="text"
                            onChange={(e) => setLastname(e.target.value)}
                            className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                        />
                          {errorMessage.lastname && (
                            <p className="text-red-500 mt-1">{errorMessage.lastname[0]}</p>
                        )}

                        <label className="block mt-4">*Password:</label>
                        <input
                            type="text"
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                        />
                          {errorMessage.password && (
                            <p className="text-red-500 mt-1">{errorMessage.password[0]}</p>
                        )}

                        <div className="flex mt-1">
                            <div>Already have an account ?</div>
                            <Link to="/login" className="ml-1 text-blue-500">Log in</Link>
                        </div>
                    </div>
                )}
                <div className="mt-8">
                    <button
                        className="bg-blue-500 p-2 w-64 rounded-full text-white font-medium text-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                        onClick={handleSubmit}
                    >Register Now!</button>
                </div>
            </div>
        </div>
    );
}

export default Register;
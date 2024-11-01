import { useState } from "react";
import '../../styles/common/register.css';
import coverImage from '../../assets/images/cover.png';
import { Link } from "react-router-dom";


function Register() {

    const [role, setRole] = useState("student");

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div className="register_login">
            
        
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
                                onChange={handleRoleChange}
                                className="hidden peer" // ซ่อน input
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
                                onChange={handleRoleChange}
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
                                className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                            />
                            <label className="block mt-4">*Firstname:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                            />
                            <label className="block mt-4">*Lastname:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                            />
                            <label className="block mt-4">*Password:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                            />
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
                                className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                            />
                            <label className="block mt-4">*Firstname:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                            />
                            <label className="block mt-4">*Lastname:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                            />
                            <label className="block mt-4">*Password:</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md p-1 w-80 mt-1 "
                            />
                            <div className="flex mt-1">
                                <div>Already have an account ?</div>
                                <Link to="/login" className="ml-1 text-blue-500">Log in</Link>
                            </div>
                        </div>
                    )}
                    <div className="mt-8">
                        <button className="bg-blue-500 p-3 w-64 rounded-2xl text-white font-medium text-md">Register Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
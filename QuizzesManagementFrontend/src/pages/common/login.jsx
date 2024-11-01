import React, { useState } from "react";
import '../../styles/common/register.css';
import coverImage from '../../assets/images/cover.png';
import { Link } from "react-router-dom";

function Login() {
    const [role, setRole] = useState("student");

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    return (
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
                                onChange={handleRoleChange}
                                className="hidden peer" 
                            />
                            <span className={`inline-block cursor-pointer rounded-full border-2 p-2 text-center ${role === "teacher" ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"} transition-colors duration-300`}>
                                Teacher
                            </span>
                        </label>
                    </div>
                    {role === "student" && (
                        <div className="mt-6">
                            <label className="block">*Student ID:</label>
                            <input type="text" className="border border-gray-300 rounded-md p-1 w-80 mt-1" />
                            <label className="block mt-4">*Password:</label>
                            <input type="password" className="border border-gray-300 rounded-md p-1 w-80 mt-1" />
                            <div className="flex mt-1">
                                <div>No account ??</div>
                                <Link className="ml-1 text-blue-500">Crate account</Link>
                            </div>
                        </div>
                    )}

                    {role === "teacher" && (
                        <div className="mt-6">
                            <label className="block">*Teacher ID:</label>
                            <input type="text" className="border border-gray-300 rounded-md p-1 w-80 mt-1" />
                            <label className="block mt-4">*Password:</label>
                            <input type="password" className="border border-gray-300 rounded-md p-1 w-80 mt-1" />
                            <div className="flex mt-1">
                                <div>No account ??</div>
                                <Link className="ml-1 text-blue-500">Crate account</Link>
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

export default Login;

//import React from 'react';
import { useState } from "react";
//import '../../styles/common/home_teacher.css';



function Home_teacher() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-C6DBFF">
            <div className="p-4">
                {/* ส่วนหัวของ card */}
                <div className="flex items-center mb-5">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="hamburger"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold">Hamburger Eiei</h2>
                        <h4 className="text-xs font-semibold text-gray-500">Post : Sep 14 2028</h4>
                    </div>
                </div>

                {/* เนื้อหาของ card */}
                <p className="text-gray-700 text-base mb-4">
                    Lab 3 Wed Framework.
                </p>

                {/* ช่องคอมเมนต์ */}
                <div className="mt-4">
                    <textarea
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-E6F1FF"
                        placeholder="Write a comment..."
                        rows="3"
                    ></textarea>
                    <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-400">
                        Post Comment
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Home_teacher;
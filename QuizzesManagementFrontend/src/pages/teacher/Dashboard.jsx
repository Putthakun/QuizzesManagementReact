import Navbar_teacher from "../../components/teacher/Navbar_teacher";
import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher";
import '../../styles/teacher/Dashboard.css'
import React, { useEffect, useRef, useState } from 'react';
import Chart from "chart.js/auto"; // Importing the Chart.js library
import { Bar } from "react-chartjs-2";
import axios from 'axios';

export default function Dashboard() {


    const labels = ["Web Framework", "Structure Programming", "Database", "PLC"];
    
    
    
    const Chardata = {
    labels: labels,
    datasets: [
        {
            label: "A",
            backgroundColor: "#92B6FE", // สีพื้นหลังแบบโปร่งใส
            borderColor: "#315ED4", // สีเส้นกราฟ
            borderWidth: 2, // ความหนาของเส้นกราฟ
            pointBackgroundColor: "#92B6FE", // สีของจุดข้อมูล
            pointBorderColor: "#315ED4", // สีขอบของจุดข้อมูล
            pointRadius: 4, // ขนาดของจุดข้อมูล
            data: [10, 20, 30, 40]
        },
        {
            label: "B",
            backgroundColor: "#92B6FE", // สีพื้นหลังแบบโปร่งใส
            borderColor: "#315ED4", // สีเส้นกราฟ
            borderWidth: 2, // ความหนาของเส้นกราฟ
            pointBackgroundColor: "#92B6FE", // สีของจุดข้อมูล
            pointBorderColor: "#315ED4", // สีขอบของจุดข้อมูล
            pointRadius: 2, // ขนาดของจุดข้อมูล
            data: [32, 15, 64, 42]
        },
    ],
    };
    

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false, // ซ่อนเส้นกริดแกน X
                },
                ticks: {
                    color: '#25333F', // สีของตัวเลขแกน X
                },
            },
            y: {
                grid: {
                    color: '#C1C1C1', // สีของเส้นกริดแกน Y
                },
                ticks: {
                    color: '#25333F', // สีของตัวเลขแกน Y
                },
                
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#444', // สีของข้อความ label
                    font: {
                        size: 14, // ขนาดตัวหนังสือ
                    },
                },
            },
        },
    };
    return (
        <div>
            <div className="main_home">
                <Navbar_teacher />
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_teacher />
                    </div>

                    <div className="main_right_dashboard">
                        <div className="main_right_text_dashboard">
                            <h2>Dashboard</h2>
                        </div>

                        <div className="main-graph" style={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            width: '90%', maxWidth: '900px', height: '500px', margin: 'auto'
                        }}>
                            <Bar data={Chardata} options={options} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
        

    )

}

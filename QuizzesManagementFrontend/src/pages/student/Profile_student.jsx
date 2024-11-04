import Navbar_student from "../../components/student/Navbar_student";
import '../../styles/student/home.css';
import Navbar_top_student from "../../components/student/Navbar_top_student";
import { Link } from "react-router-dom";
import '../../styles/student/edit.css'
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile_student() {
    const [profileImg, setProfileImg] = useState('default-profile.jpg'); // รูปภาพเริ่มต้น
    const formRef = useRef(null); // ใช้ useRef เพื่อจัดการฟอร์ม
    
    const [student, setStudent] = useState({ firstname: '', lastname: ''});
    //const { studentId } = useParams(); // ดึง studentId จาก URL
    const user_id = sessionStorage.getItem('user_id') || '';

    // ฟังก์ชันดึงข้อมูลนักเรียนเมื่อ component ถูกโหลด
    useEffect(() => {
        const fetchStudent = async () => {
            console.log("Student ID:", user_id);
        if (!user_id) {
            console.error("Student ID is not defined");
            return; // ถ้า studentId ไม่มีค่า ให้หยุดการทำงาน
        }
        
        
            try {
                const response = await axios.get(`http://127.0.0.1:8000/edit-username/${user_id}/`);
                setStudent(response.data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudent();
    }, [user_id]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // ป้องกันไม่ให้ฟอร์มรีเฟรชหน้า

        try {
            const response = await axios.patch(`http://127.0.0.1:8000/edit-username/${user_id}/`, {
                firstname: student.firstname,
                lastname: student.lastname,
            });

            console.log('Profile updated:', response.data);
            // เพิ่มการจัดการหลังจากอัปเดตเสร็จ เช่น แจ้งเตือนผู้ใช้
            alert('Profile updated successfully!'); // Alert for success
        } catch (error) {
            console.error('Error updating profile:', error);
            // เพิ่มการจัดการข้อผิดพลาด
            alert('Error updating profile. Please try again.'); // Alert for error
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value, // อัปเดตค่าใน state ตามฟิลด์ที่เปลี่ยน
        }));
    };

    const Cancel_Edit = () => {
        if (formRef.current) {
            formRef.current.reset(); // รีเซ็ตฟอร์ม
        }
        //setProfileImg('default-profile.jpg'); // รีเซ็ตภาพโปรไฟล์
        setStudent({ firstname: '', lastname: '' }); // รีเซ็ตชื่อและนามสกุล
        console.log('Cancel button clicked');
    };

    return (
        <div>
            <div className="main_home">
                <Navbar_student />
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_student />
                    </div>

                    <div className="main_right_edit_profile">
                        <div className="main_right_text_edit_profile">
                            <h2>Edit Profile</h2>                           
                        </div>
                        
                        <div className="main_right_box_edit_profile">
                            <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="input-text">
                                    <div className="student-id-text">
                                        <label htmlFor="studentid"> Student ID :</label>
                                        <div className="student-id-number">
                                            <label htmlFor="id">{user_id}</label>
                                        </div>
                                    </div>
                                    <hr className="line"></hr>
                                    <label htmlFor="firstname">Firstname :</label>
                                    <input type="text"
                                        id="firstname"
                                        name="firstname" 
                                        placeholder={student.firstname} // ใช้ค่าใน state
                                        onChange={handleChange} // อัปเดต state เมื่อมีการเปลี่ยนแปลง
                                        required>
                                    </input>

                                    <label htmlFor="lastname">Lastname :</label>
                                    <input type="text"
                                        id="lastname"
                                        name="lastname"
                                        placeholder={student.lastname} // ใช้ค่าใน state
                                        onChange={handleChange} // อัปเดต state เมื่อมีการเปลี่ยนแปลง                                  
                                        required />
                                </div>
                                <div className="button-container">
                                    <button type="button" className="cancel_button" onClick={Cancel_Edit}>Cancel</button>
                                    <button type="submit" className="save_button" >Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
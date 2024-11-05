import Navbar_teacher from "../../components/teacher/Navbar_teacher";
import Navbar_top_teacher from "../../components/teacher/Navbar_top_teacher";
import { Link } from "react-router-dom";
import '../../styles/teacher/edit.css'
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile_teacher() {
    const formRef = useRef(null); // ใช้ useRef เพื่อจัดการฟอร์ม
    
    const [teacher, setTeacher] = useState({ firstname: '', lastname: ''});

    const user_id = sessionStorage.getItem('user_id') || '';

    // ฟังก์ชันดึงข้อมูลนักเรียนเมื่อ component ถูกโหลด
    useEffect(() => {
        const fetchTeacher = async () => {
            console.log("Teacher ID:", user_id);
        if (!user_id) {
            console.error("Teacher ID is not defined");
            return; 
        }
        
        
            try {
                const response = await axios.get(`http://127.0.0.1:8000/edit-username/teacher/${user_id}/`);
                setTeacher(response.data);
            } catch (error) {
                console.error('Error fetching teacher data:', error);
            }
        };

        fetchTeacher();
    }, [user_id]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // ป้องกันไม่ให้ฟอร์มรีเฟรชหน้า

        try {
            const response = await axios.patch(`http://127.0.0.1:8000/edit-username/teacher/${user_id}/`, {
                firstname: teacher.firstname,
                lastname: teacher.lastname,
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
        setTeacher((prevTeacher) => ({
            ...prevTeacher,
            [name]: value, // อัปเดตค่าใน state ตามฟิลด์ที่เปลี่ยน
        }));
    };

    const Cancel_Edit = () => {
        if (formRef.current) {
            formRef.current.reset(); // รีเซ็ตฟอร์ม
        }
        //setProfileImg('default-profile.jpg'); // รีเซ็ตภาพโปรไฟล์
        setTeacher({ firstname: '', lastname: '' }); // รีเซ็ตชื่อและนามสกุล
        console.log('Cancel button clicked');
    };

    return (
        <div>
            <div className="main_home">
                <Navbar_teacher/>
                <div className="main_home_right">
                    <div className="main_home_right_top">
                        <Navbar_top_teacher />
                    </div>

                    <div className="main_right_edit_profile">
                        <div className="main_right_text_edit_profile">
                            <h2>Edit Profile</h2>                           
                        </div>
                        
                        <div className="main_right_box_edit_profile">
                            <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="input-text">
                                    <div className="teacher-id-text">
                                        <label htmlFor="teacherid"> Teacher ID :</label>
                                        <div className="teacher-id-number">
                                            <label htmlFor="id">{user_id}</label>
                                        </div>
                                    </div>
                                    <hr className="line"></hr>
                                    <label htmlFor="firstname">Firstname : </label>
                                    <input type="text"
                                        id="firstname"
                                        name="firstname" 
                                        placeholder={teacher.firstname} // ใช้ค่าใน state
                                        onChange={handleChange} // อัปเดต state เมื่อมีการเปลี่ยนแปลง
                                        required>
                                    </input>

                                    <label htmlFor="lastname">Lastname :</label>
                                    <input type="text"
                                        id="lastname"
                                        name="lastname"
                                        placeholder={teacher.lastname} // ใช้ค่าใน state
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
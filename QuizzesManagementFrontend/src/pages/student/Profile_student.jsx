import Navbar_student from "../../components/student/Navbar_student";
import '../../styles/student/home.css';
import Navbar_top_student from "../../components/student/Navbar_top_student";
import { Link } from "react-router-dom";
import '../../styles/student/edit.css'
import React, { useState, useRef } from 'react';

export default function Profile_student() {

    const [profileImg, setProfileImg] = useState('default-profile.jpg'); // รูปภาพเริ่มต้น
    const [username, setUsername] = useState(''); // สถานะสำหรับ username
    const [email, setEmail] = useState(''); // สถานะสำหรับ email
    const formRef = useRef(null); // ใช้ useRef เพื่อจัดการฟอร์ม

    // อัปเดตรูปภาพที่เลือก
    const previewImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImg(URL.createObjectURL(file)); // อัปเดตรูปภาพที่เลือกโดยไม่ต้องใช้ imageURL ซ้ำ
        }
    };

    // รีเซ็ตฟอร์ม
    const Cancel_Edit = () => {
        if (formRef.current) {
            formRef.current.reset(); // รีเซ็ตฟอร์ม
        }
        setProfileImg('default-profile.jpg'); // รีเซ็ตภาพโปรไฟล์
        setUsername(''); // รีเซ็ตชื่อผู้ใช้
        setEmail(''); // รีเซ็ตอีเมล
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
                            <form ref={formRef} action="/update-profile" method="post" encType="multipart/form-data">
                                <img src={profileImg} alt="รูปโปรไฟล์" className="profile-img" id="profile-img"></img>
                                <div className="profile_center">
                                    <label className="custom-file-upload">
                                        Select your picture
                                        <input type="file"
                                            id="profile-pic"
                                            name="profile-pic"
                                            accept="image/*"
                                            onChange={previewImage}>
                                        </input>
                                    </label>
                                </div>
                                <label htmlFor="username">Username :</label>
                                <input type="text"
                                    id="username"
                                    name="username"
                                    placeholder="แสดงชื่อเก่า"
                                    onChange={(e) => setUsername(e.target.value)}                                       
                                    required>                                   
                                </input>

                                <label htmlFor="username">Email :</label>
                                <input type="text"
                                    id="eamil"
                                    name="eamil"
                                    placeholder="แสดง Email เก่า"
                                    onChange={(e) => setEmail(e.target.value)}          
                                    required>
                                </input>

                                <div className="button-container">
                                    <button type="button" className="cancel_button" onClick={Cancel_Edit}>Cancel</button>
                                    <button type="submit" className="save_button">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
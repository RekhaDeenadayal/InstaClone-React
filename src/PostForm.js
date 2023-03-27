import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import instaClone from './images/icon.png';
import camera from './images/camera.png';
import "./Form.css"

export default function PostForm() {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setdescription] = useState("");
    const [postImage, setImage] = useState("");
    const navigate = new useNavigate();

    const handleEvent = async (e) => {
        e.preventDefault();

        const cloud_url = 'https://api.cloudinary.com/v1_1/dyrpvnoxx/image/upload';
        const preset = 'instacloneRekha';

        const formData1 = new FormData();
        formData1.append('file', postImage);
        formData1.append('upload_preset', preset);



        try {
            const res = await axios.post(cloud_url, formData1);
            const imageUrl = res.data.secure_url;
            console.log(imageUrl);

            const url = "https://instaclone-api-sh3c.onrender.com/api/image"

            await axios.post(url, {
                name: name,
                location: location,
                likes: Math.floor(Math.random() * (100)) + 0,
                description: description,
                postImage: imageUrl,
                date: new Date()
            }).then((res) => {
                navigate('/PostView/PostServices');
            }).catch((err) => {
                console.log(err);
            })
        } catch (err) {
            console.error(err);
        }
    };

    return <>

        <div id="instaClone">
            <div className="header">
                <img className='left bg' src={instaClone} height="40px" width="40px" />
                <span className=' main-text'>Instaclone</span>
                <img className="camera" src={camera} height="40px" width="40px" />
            </div>
            <div className='form'>
                <form action="/posts" method='post' onSubmit={handleEvent}>
                    <input required type="file" name="image" placeholder="No file chosen" onChange={e => { setImage(e.target.files[0]) }} ></input>
                    <input required type="text" placeholder="Author" onChange={e => { setName(e.target.value) }} value={name}></input>
                    <input required type="text" placeholder="Location" onChange={e => { setLocation(e.target.value) }} value={location}></input>
                    <input required type="text" placeholder="Description" onChange={e => { setdescription(e.target.value) }} value={description}></input>
                    <button type="submit">POST</button>
                </form>
                <div>
                    <img src={postImage === "" ? "" : URL.createObjectURL(postImage)} id={postImage == "" ? "" : "preview"}></img>
                </div>
            </div>
        </div>
    </>
}

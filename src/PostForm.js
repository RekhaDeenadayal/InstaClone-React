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

    function handleEvent(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("location", location);
        formData.append("likes", Math.floor(Math.random() * (100)) + 0)
        formData.append("description", description);
        formData.append("postImage", postImage);
        formData.append("date", new Date());

        const url = "https://instaclone-api-sh3c.onrender.com/api/image"
        const config = {
            headers: { "content-type": "multipart/form-data" }
        }

        axios.post(url, formData, config).then((res) => {
            navigate('/PostView/PostServices');
            console.log(res.data);

        }).catch((err) => {
            console.log(err);
        })
    }

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
                    <img  src={postImage === "" ? "" : URL.createObjectURL(postImage)} id = {postImage== "" ? "" : "preview"}></img>
                </div>
            </div>
        </div>
    </>
}

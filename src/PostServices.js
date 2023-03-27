import axios from "axios";
import { useState, useEffect } from "react";
import Post from "./Post";

export default function PostServices(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/image")
            .then(res => {
                console.log(res.data);
                setData(res.data.data);
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return <>

        {
            data.map((item, index) => {
                return <Post item={item} key={index + 1} />
            })
        }
    </>
}


import React,{useEffect, useState} from 'react';
import Header from '../components/Header';
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import api from '../apiconfig/api';
import Loading from '../components/Loading';
const Blogdetails = () => {
const[posts, setPosts] = useState("");
const[loading, setLoading] = useState(false);

 const {id} = useParams();

      const fetchdata = async() =>{
        setLoading(true);
       const {data} = await api.get(`/posts/${id}`);
       setLoading(false);
       setPosts(data);
      }  

      useEffect(() =>{
        fetchdata();
      }, [])
       const container ={
        width:'1200px',
        maxWidth:'90%',
        margin:'0 auto'
      }
    return (
        <div style={container}>
             <Header title="Demo Blog"  subtitle="Using api: https://jsonplaceholder.typicode.com/posts" extra="Create Blog" />
           {loading ? (<Loading/>) : ( <Descriptions title="Post Info" key={posts.id}>
           <Descriptions.Item >
                User_Id: {posts.userId}
                <br />
                Post_id: {posts.id}
                <br />
                Title: {posts.title}
                <br />
                Description: {posts.body}
                
                </Descriptions.Item>
  </Descriptions>)}
        </div>
    )
}

export default Blogdetails

import React,{useEffect, useState} from 'react'
import api from '../apiconfig/api';
import {notification } from 'antd';
import Blogcard from '../components/Blogcard';
import 'antd/dist/antd.css'
import Loading from '../components/Loading';
import Header from '../components/Header';
const Listblog = () => {
const[posts, setPosts] = useState([]);
const[loading, setLoading] = useState(false);
const[filter, setFilter] = useState("");
const [searchParam] = useState(['title', 'id']);
//fetchNotification
const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Notification related Test:',
      description:
      'Api Endpoints : https://jsonplaceholder.typicode.com/posts'
    });
  };
const fetchdata = async() =>{
 setLoading(true);
   const {data} = await api.get('/posts');
   setLoading(false);
   setPosts(data);
  }
useEffect(() =>{
  fetchdata();
  openNotificationWithIcon('info');
}
,[])


const container ={
  width:'1200px',
  maxWidth:'90%',
  margin:'0 auto'
}

const searchData = (posts) =>{
    return posts.filter((post) =>{
        return searchParam.some((newpost) =>{
            return (
                post[newpost].toString().toLowerCase().indexOf(filter.toLowerCase()) > -1
            )
        })
    })
}

const search = (
    <div class="ui category search">
  <div class="ui icon input">
    <input class="prompt" type="text" placeholder="Search by Title or id" onChange={(e) => setFilter(e.target.value)} style={{width:'300px'}}/>
    <i class="search icon"></i>
  </div>
</div>
)
  return (
    <div style={container}>
    <Header 
    title="Demo Blog"  
    subtitle="Using api: https://jsonplaceholder.typicode.com/posts" 
    extra="Create Blog" 
    search = {search}
    />    
     {loading ? 
     <Loading/> : <Blogcard posts={posts} searchData = {searchData} />}
    </div>
  )
}

export default Listblog

import React,{useState, useEffect} from 'react'
import api from '../http/api';
import { useParams } from 'react-router-dom';
import Grid from '../components/Grid';
const BlogsDetails = () => {
    const[blog, setBlog] = useState('');
    const [loading, setLoading] = useState(true);
   const {id} = useParams();



    useEffect(() =>{
        const fetchData = async() =>{
        
            const {data} = await api.get(`/blogs/${id}`);
            setLoading(false);
            setBlog(data);
        }
        fetchData();
    },[id])


    return (    
      <>
       {loading ? <p style={{padding: "10px 20px"}}>loading...</p> : (
         <Grid>
             <div className="ui raised card">
  <div className="content">
    <div className="header">{blog.title}</div>
    <div className="meta">
      <span className="category">{blog.category}</span>
    </div>
    <div className="description">
      <p>{blog.description}</p>
    </div>
  </div>
  <div className="extra content">
    <div className="right floated author">
      <img className="ui avatar image" src={blog.picture} alt="author"/> {blog.author}
    </div>
  </div>
</div>
         </Grid>
       )}
      </>
    )
}

export default BlogsDetails

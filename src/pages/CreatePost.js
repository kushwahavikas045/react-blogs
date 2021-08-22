import React,{useState} from 'react'
import Grid from '../components/Grid';
import { createPost } from '../http/api';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const d = new Date();
const CreatePost = () => {
  
    const[formData, setFormData] = useState({
      title: "",
      author: "",
      category: "",
      description: "",
     
      date:`${d.getFullYear()}-${d.getMonth() + 1 }-${d.getDate()}`,
    });
    const[loading, setLoading] = useState(false);
    
    const {title, author, category, description, date} = formData;

    const handleChange = (e) =>{
    setFormData({...formData, [e.target.name] : e.target.value});
    }


    const submit = async(e) =>{
        e.preventDefault();
        if(!title || !author || !category || !description){
            toast.error('😟 All field required!');
            return ;
        }
        setLoading(true);
       
        createPost(formData);
        toast.success("post created successful");
       
        
    }
    return (
        <Grid>
            <ToastContainer/>
            <form class={`ui form`} style={{width: '50%'}}>
            <div class="field">
                    <label>Title:</label>
                    <input type="text" name="title" onChange={handleChange} value={title}/>
            </div>
            <div class="field">
                    <label>Author Name😀:</label>
                    <input type="text" name="author" onChange={handleChange} value={author}/>
            </div>
            <div class="field">
                    <label>Category</label>
                    <input type="text" name="category" onChange={handleChange} value={category}/>
            </div>
               <div class="field">
                    <label>description</label>
                    <textarea
                    name="description"
                    onChange={handleChange}
                    value={description}
                    ></textarea>
                </div>

                <div class="fields">
                    
                    <div class="field">
                    <label>Today Date</label>
                    <input type="text" 
                    placeholder="Date"
                    name="date"
                    value={date}/>
                    </div>
                </div> 
             <button className="ui positive button"  
             style={{margin:'20px 20px'}} 
             onClick={submit}>
                 Create post
                </button>
             </form>  
        </Grid>
    )
}

export default CreatePost;

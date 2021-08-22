import React,{useState} from 'react'

const Posts = () => {
    const [text, setText] = useState({
        dec: "",
    });
    const[posts,setPosts] = useState([]);
    const submit = (e) =>{
     e.preventDefault();
       posts.push(text);
    }
    console.log(posts);

    const handleChange = (e) =>{
        setText({...text, [e.target.name]: e.target.value});
    }
    return (
        <div class="ui form"style={{width:'90%',marginTop: '5%', maxWidth:'1200px' ,margin:'0 auto'}}>
        <div class="field">
          <label>Write about your posts</label>
          <textarea name="dec" onChange={handleChange}></textarea>
        </div>
        <button class="ui primary button" onClick={submit}>Post</button>
      </div>
    )
}

export default Posts

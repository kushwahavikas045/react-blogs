import React,{useState, useEffect} from 'react';
import Cards from '../components/Cards';
import Grid from '../components/Grid';
import api from '../http/api';
const Blogs = () => {
    const[blogs, setBlogs] = useState([]);
    const[loading, setLoading] = useState(true);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["title", "category",]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const fetchData = async() =>{
        const {data} = await api.get('/blogs');
        setLoading(false);
        setBlogs(data);
    }
    useEffect(() =>{
     fetchData();
    },[]);

    const search = (blogs) =>{
        return blogs.filter((blog) =>{
            if(blog.category === filterParam){
                return searchParam.some((newItem) =>{
                    return (
                        blog[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                    );
                });
            }else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        blog[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        })
    }


    return (
     <>               
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', maxWidth:'1200px' ,margin:'0 auto', padding:'20px'}}>
                         <div class="ui fluid category search" style={{}}>
                            <div class="ui icon input">
                            <input class="prompt"
                             type="search"
                             value={q}
                             onChange={(e) => setQ(e.target.value)}
                             placeholder="Search by title"/>
                             <i class="search icon"></i>
                            </div>
                            
                        </div>
                      
                         <div style={{width:'90%', maxWidth:'1200px' ,margin:'0 auto', padding:'20px'}}>
                        <select 
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="custom-select"
                            aria-label="Filter by category"
                        >
                            <option value="All">Filter By Category</option>
                            <option value="Web development">Web development</option>
                            <option value="mobile development">mobile development</option>
                            <option value="data science">data science</option>
                        </select>
                        </div>
                        </div>
     {loading ? <p style={{padding: "10px 20px"}}>loading... please run this command in new  terminal with same dir:<p style={{color: 'red'}}>npx json-server --watch data/db.json --port 8000</p> </p> :
      search(blogs).map((blog) =>(
         <Grid>
             
             <Cards 
             id={blog.id} 
             title={blog.title}
             description={blog.description}
             author = {blog.author}
             category = {blog.category}
             picture = {blog.picture}
             date = {blog.date}
              />
              
         </Grid>
     ))}
     </>   
    )
}

export default Blogs;

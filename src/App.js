import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Headers from './components/Headers';

import Blogs from './pages/Blogs';
import BlogsDetails from './pages/BlogsDetails';
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';
function App() {
  return (
    <Router>
      <Headers/> 
      <Switch>
        <Route exact path="/">
         <Blogs/>
        </Route>
        <Route exact path="/blogs/:id">
         <BlogsDetails/>
        </Route>
        <Route exact path="/create-post">
         <CreatePost/>
        </Route>
        <Route exact path="/posts">
         <Posts/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

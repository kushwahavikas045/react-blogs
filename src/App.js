import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Blogdetails from './pages/Blogdetails';
import CreateBlog from './pages/CreateBlog';
import Listblog from './pages/Listblog';
const App = () => {
  return (
   <Router>
    <Switch>
      
      <Route exact path="/">
        <Listblog/>
      </Route>
      <Route exact path="/blog/details/:id">
        <Blogdetails/>
      </Route>
      <Route exact path="/blog/create">
        <CreateBlog/>
      </Route>
    </Switch>
   </Router>
  )
}

export default App

import React, {useEffect, useState} from 'react';
import { Route } from "react-router-dom";
import './App.css';
import axios from 'axios';
import UpdateForm from './components/UpdateForm';
import PostsList from './components/PostsList';


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/posts')
    .then(response =>{
      setPosts(response.data)
    })
    .catch(error =>{
      console.log(error, 'There was an error getting posts back from api')
    })
  },[]);


  return (
    <div className="App">
      <h1>My Posts</h1>
      <PostsList posts={posts}/>
      
      <Route path='/update-post/:id' render={props => <UpdateForm {...props} />}/>
    </div>
  );
}

export default App;

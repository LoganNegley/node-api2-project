import React, {useEffect, useState} from 'react';
import { Route } from "react-router-dom";
import './App.css';
import axios from 'axios';

// Components
import UpdateForm from './components/UpdateForm';
import PostsList from './components/PostsList';


function App() {
  const [postsList, setPostsList] = useState([]);

  const getPostsList = () =>{
    axios.get('http://localhost:4000/api/posts')
    .then(response =>{
      setPostsList(response.data)
    })
    .catch(error =>{
      console.log(error, 'There was an error getting posts back from api')
    })
  }
 console.log(postsList)


  useEffect(() => {
    getPostsList();
  },[]);

      if(!postsList){ 
     return <h3>....Loading your posts</h3>
  };


  return (
    <div className="App">

      <Route exact path="/">
        <PostsList posts={postsList} getPostsList={getPostsList}/>
      </Route>
      <Route path='/update-post/:id' render={props => <UpdateForm {...props} postsList={postsList} getPostsList={getPostsList}/>}/>
    </div>
  );
}

export default App;

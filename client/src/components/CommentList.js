import React, {useEffect, useState} from 'react';
import { Route } from "react-router-dom";
import './App.css';
import axios from 'axios';

// Components
import UpdateForm from './components/UpdateForm';
import PostsList from './components/PostsList';


function CommentList() {
  const [comments, setComments] = useState([]);

  const getComments = () =>{
    axios.get('http://localhost:4000/api/posts/:id/comments')
    .then(response =>{
      console.log(response)
    })
    .catch(error =>{
      console.log(error, 'There was an error getting comments back from api')
    })
  }



  useEffect(() => {
    getPostsList();
  },[]);

      if(!comments){ 
     return <h3>....Loading your comments</h3>
  };


  return (
    <div className="comment-container">
        
    </div>
  );
}

export default App;
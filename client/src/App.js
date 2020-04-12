import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
    .then(response =>{
      console.log(response)
    })
    .catch(error =>{
      console.log(error, 'There was an error getting posts back from api')
    })
  },[]);


  return (
    <div className="App">
      <h1>My Posts</h1>
    </div>
  );
}

export default App;

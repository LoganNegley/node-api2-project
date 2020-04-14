import React, {useEffect, useState} from 'react';
import axios from 'axios';


function CommentList(props) {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});

     const getPost = () =>{
     props.postsList.find(item => (
        `${item.id}` === props.match.params.id 
    ));
        setPost(getPost)
     };

//   const getComments = () =>{
//     axios.get('http://localhost:4000/api/posts/:id/comments')
//     .then(response =>{
//       console.log(response)
//     })
//     .catch(error =>{
//       console.log(error, 'There was an error getting comments back from api')
//     })
//   }



//   useEffect(() => {
//     getPostsList();
//   },[]);

      if(!comments){ 
     return <h3>....Loading your comments</h3>
  };


  return (
    <div className="comment-container">

    </div>
  );
}

export default CommentList;
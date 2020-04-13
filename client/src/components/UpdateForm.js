import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialPost = {
    title:'',
    content:''
}


function UpdateForm(props) {
const [post, setPost] = useState(initialPost);


 // Find the post matching ID
    useEffect(()=>{
        const postToUpdate = props.postsList.find(item => (
            `${item.id}` === props.match.params.id
        ))

        if(postToUpdate){
            setPost(postToUpdate)
        }
    },[props.postsList]);




  return (
      <div className='updateForm'>
        <form>

        </form>
      </div>

  );
}

export default UpdateForm;
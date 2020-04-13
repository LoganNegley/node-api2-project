import React, {useState, useEffect} from 'react';
import axios from 'axios';

const initialPost = {
    title:'',
    contents:''
}


function UpdateForm(props) {
const [post, setPost] = useState(initialPost);
const id = props.match.params.id;

 // Find the post matching ID
    useEffect(()=>{
        const postToUpdate = props.postsList.find(item => (
            `${item.id}` === props.match.params.id
        ))

        if(postToUpdate){
            setPost(postToUpdate)
        }
    },[props.postsList]);

    console.log(post)

const handleChange = event => {
    setPost({
        ...post,
        [event.target.name]: event.target.value
    })
};

const handleSubmit = event => {
    event.preventDefault();
    axios
    .put(`http://localhost:4000/api/posts/${id}`, post)
    .then(response =>{
        console.log(response)
        props.history.push('/')
    })
    .catch(error =>{
        console.log(error, 'error with making a put request to update posts')
    })
};


  return (
      <div className='updateForm'>
        <form onSubmit={handleSubmit}>
            <input
                name='title'
                type='text-'
                placeholder="Title"
                value={post.title}
                onChange={handleChange}
            />
            <input
                name='contents'
                type='text'
                placeholder='Content'
                value = {post.contents}
                onChange={handleChange}
            />
            <button type='submit'>Update</button>
        </form>
      </div>

  );
}

export default UpdateForm;
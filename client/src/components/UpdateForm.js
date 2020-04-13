import React, {useState, useEffect} from 'react';


const initialPost ={
    title: '',
    content: ''
};

function UpdateForm(props) {
    const [post, setPost] = useState(initialPost);

// Find the post matching ID
    useEffect(()=>{
        const postToUpdate = props.postsList.find(item => (
            `${item.id}` === props.match.params.id
        ))
        console.log(postToUpdate)

        if(postToUpdate){
            setPost(postToUpdate)
        }
    },[]);

  return (
      <div className='updateForm'>
        <form>

        </form>
      </div>

  );
}

export default UpdateForm;
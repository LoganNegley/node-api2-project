import React, {useState, useEffect} from 'react';


const initialPost ={
    title: '',
    content: ''
};

function UpdateForm(props) {
    const [post, setPost] = useState(initialPost);
    const id = props.match.params.id;
    
    console.log(props)

  return (
      <div className='updateForm'>
        <form>

        </form>
      </div>

  );
}

export default UpdateForm;
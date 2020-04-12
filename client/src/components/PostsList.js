import React from 'react';

function PostsList(props) {



  return (
    <div className="posts-container">
      {props.posts.map(item =>(
        <div className="post" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.contents}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

function PostsList(props) {

 

  return (

      <Container>
      <h1>My Posts</h1>
        <Row xs="1" sm="2" md="4">
          {props.posts.map(item =>(
            <Card body inverse color="info" className="text-center" key={item.id}>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.contents}</CardText>
              <Link to={`/update-post/${item.id}`}>
                <Button>Edit Post</Button>
              </Link>
              <button>Get comments</button>
            </Card>
          ))}
        </Row>
      </Container>

  );
}

export default PostsList;
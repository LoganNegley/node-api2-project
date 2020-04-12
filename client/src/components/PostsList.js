import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function PostsList(props) {

  return (
      <Container>
        <Row xs="1" sm="2" md="4">
          {props.posts.map(item =>(
            <Card body inverse color="info" className="text-center" key={item.id}>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.contents}</CardText>
              <Button>Edit Post</Button>
            </Card>
          ))}
        </Row>
      </Container>

  );
}

export default PostsList;
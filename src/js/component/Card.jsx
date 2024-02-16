import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function TheCard(props) {
  return (
    <Container className='p-0 mt-4 d-flex justify-content-center'>
    <Card style={{ width: '20rem', minHeight: '30rem', maxHeight: '30rem'  }}>
      <Card.Img variant="top" src="https://picsum.photos/id/257/500/325" />
      <Card.Body>

        <div className='d-flex justify-content-center'>
        <Card.Title>{props.title}</Card.Title>
        </div>

        <div className='d-flex justify-content-center m-2'>
        <Card.Text className='d-flex justify-content-center'>
          <p className='p-0 m-0 text-center'>{props.text}</p>
        </Card.Text>
        </div>

          
        <div className='d-flex justify-content-center'>
        <Button variant="primary">Find Out More</Button>
        </div>

      </Card.Body>
    </Card>
    </Container>
    
     
  );
}

export default TheCard;
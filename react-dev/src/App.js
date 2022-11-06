import './App.css';
import './style.css'
import style from './custom.module.css'
import {Button,Card } from 'react-bootstrap';
import React from 'react';
function App()
{
  return(

  <div className='App'>
    <h1>Install Bootstrap</h1>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    
  </div>
  );
}

export default App;
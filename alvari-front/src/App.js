import React from 'react';
import { Form, Button } from 'react-bootstrap'
import logo from './alvari.svg';
import './App.css'
import './bootstrap/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:'#110039'}}>
        <img src={logo} className="App-logo" alt="banner" />
        <h3>
          Cloud-based genetic crypto trading, wherever you go
        </h3>
        <h2>Coming Fall 2019</h2>
        <br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Stay up-to-date, join our mailing list!</Form.Label>
            <Form.Control type="email" placeholder="Your email"/>
            <Form.Text className="text-muted">
              Your email is completely confidential.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Get Updates
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default App;

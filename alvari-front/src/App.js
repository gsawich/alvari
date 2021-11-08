import React, { useState, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import logo from './alvari.svg'
import './App.css'
import './bootstrap/css/bootstrap.min.css'

const apiKey = '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'

function App() {
  const [bText, setText] = useState('Get Updates')
  const emailRef = useRef(null)
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:'#110039'}}>
        <img src={logo} className="App-logo" alt="banner" />
        <h3>
          Cloud-based Evolutionary Digital Asset Trading
        </h3>
        <h1>Coming Q4 2019</h1>
        <div>
        <br />
        <br />
        </div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Stay up-to-date by joining our mailing list!</Form.Label>
            <Form.Control type="email" ref={emailRef} placeholder="Your email"/>
            <Form.Text className="text-muted">
              Your email is completely confidential.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={ e=> {
            if (bText === 'Get Updates') {
              setText('Sending...')
              let url = 'https://api.sendinblue.com/v3/contacts'
              let content = { "email":emailRef.current.value }
              fetch(url, { method:'POST', headers: { 'content-type': 'application/json', 'api-key': apiKey }, body: JSON.stringify(content) } ).then( (data) => {
                data.json()
                console.log(data)
                if (data.status < 400) {
                  setText('Signed Up!')
                } else {
                  setText('Failed to sign up! :(')
                }
              })
            }
          }}>
            {bText}
          </Button>
        </Form>
      </header>
    </div>
  )
}

export default App

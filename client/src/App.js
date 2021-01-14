import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './App.css'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box';
import { SERVER_ADDRESS } from './consts';

const socket = io.connect(SERVER_ADDRESS,  {secure: true})

function App() {
  const [state, setState] = useState({ timestamp: '', message: '', name: '' })
  const [chat, setChat] = useState([])

  const onTyping = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onMessageSubmit = e => {
    e.preventDefault()
    const { timestamp, name, message } = state
    socket.emit('message', { timestamp, name, message })
    setState({ timestamp: '', message: '', name })
  }

  const showChat = () => {
    return chat.map(({ timestamp, name, message }, index) => (
      <div key={index}>
        <h3> <span>{timestamp}:  </span>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  useEffect(() => {
    // message received on same server
    socket.on('message', ({ timestamp, name, message }) => {
      setChat([...chat, { timestamp, name, message }])
    })
    // message received on the second server
    socket.on('serv_message', ({ timestamp, name, message }) => {
      setChat([...chat, { timestamp, name, message }])
    })
  })


  return (
    
    <div className="messenger">
      <form onSubmit={onMessageSubmit}>
      <Box color="black" bgcolor="lightgrey">
        <h1>Messenger</h1>
        </Box>
        <div className="name-field">
          <TextField
            name="name"
            onChange={e => onTyping(e)}
            value={state.name}
            label="Enter your name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={e => onTyping(e)}
            value={state.message}
            // id="outlined-multiline-static"
            // variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div className="chat-log">
        <Box color="black" bgcolor="lightgrey">
        <h1>Chat Room</h1>
        {showChat()}
        </Box>
      </div>
    </div>
  )
}

export default App

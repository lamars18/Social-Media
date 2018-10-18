import React, { Component } from 'react'
import UsernameForm from './UsernameForm'
import ChatScreen from './ChatScreen'
// import axios from 'axios';

class ChatApp extends Component {
  constructor() {
    super()
    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen',
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  onUsernameSubmitted(username) {
    console.log(username);

    // let axiosConfig = {
    //   headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       "Access-Control-Allow-Origin": "*",
    //   }
    // };

    fetch('http://localhost:3001/users', {
    // axios.post('http://localhost:3001/chat/users', username, axiosConfig) 
    // axios.post('/chat/users', JSON.stringify({ username }), axiosConfig) 
    // fetch('/chat/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: 'ChatScreen',
        })
      })
      .catch(error => console.error('error', error))

    // fetch('http://localhost:3001/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username }),
    // })
    //   .then(response => {
    //     this.setState({
    //       currentUsername: username,
    //       currentScreen: 'ChatScreen',
    //     })
    //   })
    //   .catch(error => console.error('error', error))
  }

  render() {
    if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return <ChatScreen currentUsername={this.state.currentUsername} />
    }
  }
}

export default ChatApp
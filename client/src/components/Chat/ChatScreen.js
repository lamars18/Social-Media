import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import TypingIndicator from './TypingIndicator'
import WhosOnlineList from './WhosOnlineList'
// import UsernameForm from './UsernameForm'

class ChatScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      currentUser: {},
      currentRoom: {},
      messages: [],
      usersWhoAreTyping: [],
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.sendTypingEvent = this.sendTypingEvent.bind(this)
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }

  onChange(e) {
     this.setState({ username: e.target.value })
  }

  sendTypingEvent() {
    this.state.currentUser
     .isTypingIn({ roomId: this.state.currentRoom.id })
      .catch(error => console.error('error', error))
  }

   sendMessage(text) {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id,
    })
  }

  comonentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:bf8def9e-a084-4d5d-b55c-018e22b58449',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:3001/authenticate',
      }),
    })

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        return currentUser.subscribeToRoom({
          roomId: 17843815,
          messageLimit: 100,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              })
            },
            onUserStartedTyping: user => {
              // console.log(user.name, "started typing")
               this.setState({
                usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
               })
            },
            onUserStoppedTyping: user => {
              // console.log(user.name, "stopped typing")
               this.setState({
                  usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                   username => username !== user.name
                 ),
               })
            },
            
            onUserCameOnline: () => this.forceUpdate(),
            onUserWentOffline: () => this.forceUpdate(),
            onUserJoined: () => this.forceUpdate(),
          },
        })
      })
      .then(currentRoom => {
        this.setState({ currentRoom })
      })
      .catch(error => console.error('error', error))
  }
  render() {
    const styles = {
      container: {
                height: '75vh',
                display: 'flex',
                flexDirection: 'column',
                
              },
            chatContainer: {
                display: 'flex',
                flex: 1,
              },
              whosOnlineListContainer: {
                width: '500px',
                flex: 'none',
                padding: 20,
                backgroundColor: '#2c303b',
                color: 'white',
                height: '500px',
              },
              chatListContainer: {
                padding: 0,
                width: '75%',
                display: 'flex',
                flexDirection: 'column',
              },
           }
          
    return (
      <div style={styles.container}>
      <div style={styles.chatContainer}>
      <section style={styles.chatListContainer}>
          <MessageList
            messages={this.state.messages}
            style={styles.chatList}
          />
           <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
          <SendMessageForm
            onSubmit={this.sendMessage}
             onChange={this.sendTypingEvent}
          />
        </section>
        </div>
        <div style={styles.whosOnlineListContainer}>
        <div>
        
        <div>
        
          <h2>What is your username?</h2>
          <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Your full name" onChange={this.onChange} />
            <input type="submit" />
          </form>
        
      </div>
      {/* <UsernameForm  /> */}
        <WhosOnlineList
            currentUser={this.state.currentUser}
              users={this.state.currentRoom.users}
            />
        </div>
        
      </div>
    </div>
  )
    
}
}

export default ChatScreen
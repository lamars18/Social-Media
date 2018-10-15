///////////////////
// dependencies
///////////////////
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
// pages
import Home from './components/Home';
import NewsFeed from './components/NewsFeed';
import NotFound from './components/NotFound';
import About from './components/About';
// Context UI
import { Provider } from './context';
// stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//For chat
// import UsernameForm from './components/Chat/UsernameForm'
// import ChatScreen from './components/Chat/ChatScreen'

class App extends Component {
  
   //////////////////////////////////////////////
  // handle communicating with express server
  //////////////////////////////////////////////
  state = {
    // articles: ''
    appName: "SpaceBar",
    orgName: "GT Project Team",
    year: new Date().getFullYear()
  };

  async componentDidMount() {
      // let res = await axios.get('/api/scrape');
  
      // console.log(res.data);
      // this.setState({ articles: res.data });
  }
  constructor() {
    super()
    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen',
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  onUsernameSubmitted(username) {
    fetch('http://localhost:3001/users', {
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
  }
  


  /////////////////////////
  // app render
  /////////////////////////
  render() {
    // if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
    //   return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    // }
    // if (this.state.currentScreen === 'ChatScreen') {
    //   return <ChatScreen currentUsername={this.state.currentUsername} />
    // }
    return (
      <Provider>
        <Router>
          <div className="App fluid-container">
            <Navigation 
              branding={this.state.appName}
            />
            <Header
              title={this.state.appName}
              titleicon="fas fa-rocket"
              message="Discover what's out there."
            ></Header>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/api/articles' component={NewsFeed} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>

            <Footer
              year={this.state.year}
              orgName={this.state.orgName}
              >
            </Footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
  
  
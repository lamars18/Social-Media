import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_ARTICLE':
      return {
        ...state,
        articles: state.articles.filter(
          article => article.id !== action.payload
        )
      };
    case 'ADD_ARTICLE':
      return {
        ...state,
        articles: [action.payload, ...state.articles]
      };
    case 'UPDATE_ARTICLE':
      return {
        ...state,
        articles: state.articles.map(
          article =>
            article.id === action.payload.id
              ? (article = action.payload)
              : article
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    articles: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    console.log("in context.js");

    let res = await axios.get('/api/scrape');
  
    console.log(res.data);
    this.setState({ articles: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

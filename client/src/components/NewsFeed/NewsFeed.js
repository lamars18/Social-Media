import React, { Component } from 'react';
import Wrapper from "../Wrapper";
import Card from "../Card";
import "./NewsFeed.css";
import articles from "./articlesTemp.json";

class NewsFeed extends Component {

  ///////////////////////////
  // handle state
  ///////////////////////////

  // load the images from the json array
  state = {
    articles: articles
  };
  
  render() {
    return (
      <section className="news-feed">
        NEWSFEED PAGE
        <Wrapper>
          {this.state.articles.map(articleItem => (
            <Card
              id={articleItem.id}
              key={articleItem.id}
              title={articleItem.title}
              date={articleItem.date}
              url={articleItem.url}
            />
          ))}
        </Wrapper>
      </section>
    )
  }
}

export default NewsFeed;

// import React from "react";
import React, { Component } from 'react';
import Wrapper from "../Wrapper";
import CardBtn from "../CardBtn";
import "./Card.css";
import moment from 'moment';

// load up a series of button definitions
const cardButtons = [
  {
    "id": 1,
    "datavalue": "read",
    "title": "Read",
    "icon": "fas fa-book-open"
  },
  {
    "id": 2,
    "datavalue": "save",
    "title": "Save",
    "icon": "fas fa-thumbtack"
  },
  {
    "id": 3,
    "datavalue": "delete",
    "title": "Delete",
    "icon": "far fa-trash-alt"
  },
  {
    "id": 4,
    "datavalue": "comment",
    "title": "Comment",
    "icon": "far fa-comments fa-lg"
  }
];

class Card extends Component {

  ///////////////////////////
  // handle state
  ///////////////////////////

  // load the images from the json array
  state = {
    cardId: 1,
    cardButtons: cardButtons,
    comments: []
  };
  
    // return in utc to convert the date from the offset provided to UTC
    // these dates have no timezone
    formatDate = (date) => moment.utc(date).format('MM/DD/YYYY');

  render() {
    return (

      <div
        className="card sized-card"
        // style={{
        //   backgroundImage: props.image ? `url(${props.image})` : "none"
        // }}
      >
        <div className="mr-2 text-right">
          <i className="fas fa-times" aria-hidden="true" hidden />
        </div>

        <div className="card-body d-flex flex-column">
          <h4 className="card-title">{this.props.title}</h4>
          <h6>Written by {this.props.author}</h6>
          <h6 className="text-muted">{this.formatDate(this.props.date)}</h6>
          <hr></hr>
          <p className="card-text">{this.props.summary}</p>

          <div className="mt-auto">
            <p className="text-right"><small><span id="comment-length-{this.props._id}">{this.state.comments.length}</span> Comments</small></p>
            <Wrapper>
                {this.state.cardButtons.map(cardBtn => (
                  <CardBtn
                    id={cardBtn.id}
                    key={cardBtn.id}
                    data-value={cardBtn.datavalue}
                    title={cardBtn.title}
                    icon={cardBtn.icon}
                    // url={this.props.url}
                    // style={{ opacity: props.image ? 1 : 0 }}
                    onClick={this.props.handleBtnClick}
                  />
                ))}
            </Wrapper>
          </div>
        </div>

      </div>

    )
  }
}

export default Card;

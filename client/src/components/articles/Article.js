import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArticle } from '../../actions/articleActions';
import moment from 'moment';

import Wrapper from '../layout/Wrapper';
import BtnRound from '../layout/BtnRound';

const cardButtons = [
  {
    "id": 1,
    "type": "link",
    "datavalue": "read",
    "title": "Read",
    "icon": "fas fa-book-open"
  },
  {
    "id": 2,
    "type": "button",
    "datavalue": "save",
    "title": "Save",
    "icon": "fas fa-thumbtack"
  },
  {
    "id": 3,
    "type": "button",
    "datavalue": "delete",
    "title": "Delete",
    "icon": "far fa-trash-alt"
  },
  {
    "id": 4,
    "type": "button",
    "datavalue": "comment",
    "title": "Comment",
    "icon": "far fa-comments fa-lg"
  }
];

class Article extends Component {
  state = {
    showArticleInfo: false,
    cardButtons: cardButtons,
    comments: []
  };

  onDeleteClick = id => {
    this.props.deleteArticle(id);
  };

  // return in utc to convert the date from the offset provided to UTC
  // these dates have no timezone
  formatDate = (date) => moment.utc(date).format('MM/DD/YYYY');

  render() {
    const { showArticleInfo } = this.state;
    const {_id, title, date, url, author, summary, comments} = this.props.article;

    return (
      <div className="card card-body mb-3">

        <h6 className="text-left">{title} 
          <i 
            className="fas fa-caret-down ml-2" 
            style={{ cursor: 'pointer' }}
            onClick={() =>
              this.setState({
                showArticleInfo: !this.state.showArticleInfo
              })
            }
          ></i>
          <i 
            className="fas fa-times app-color-2" 
            style={{cursor: 'pointer', float: 'right'}}
            onClick={this.onDeleteClick.bind(this, _id)}
          ></i>
          <Link to={`api/articles/${_id}`}>
            <i 
              className="fas fa-pencil-alt app-color-4" 
              style={{cursor: 'pointer', float: 'right', marginRight: '1rem'}}
            ></i>
          </Link>
        </h6>

        <small className="text-left text-muted">By {author}, {this.formatDate(date)}</small>

        {showArticleInfo ? (
          <div> 
            <hr></hr>
            <p className="card-text">{summary}</p>
            <div className="mt-auto">
              <p className="text-right mb-1">
                <small><span id="comment-length-{id}">{comments.length}</span> Comments</small>
              </p>
              <Wrapper>
                {this.state.cardButtons
                  .filter(btn => btn.type === "link")
                  .map(linkBtn => (
                    <a 
                      key={linkBtn.id}
                      href={url} 
                      className={`card-btn mt-auto app-border-color-1 bg-white app-color-1 `}
                      target="_blank" 
                      rel="noopener noreferrer"
                      role="button"
                    >
                      <i className={`${linkBtn.icon} mt-3`} aria-hidden="true" style={{verticalAlign: 'middle'}} />                    
                    </a>
                ))}

                {this.state.cardButtons
                  .filter(btn => btn.type !== "link")
                  .map(cardBtn => (
                    <BtnRound
                      id={cardBtn.id}
                      key={cardBtn.id}
                      data-value={cardBtn.datavalue}
                      title={cardBtn.title}
                      icon={cardBtn.icon}
                      url= {url ? url : null}
                      // onClick={this.props.handleBtnClick}
                    />
                ))}
              </Wrapper>
            </div>
          </div>
        ) : null}

      </div>


    );
  }
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  deleteArticle: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteArticle }
)(Article);

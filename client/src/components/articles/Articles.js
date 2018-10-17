import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Article from './Article';
import { getArticles } from '../../actions/articleActions';

class Articles extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    const { articles } = this.props;
    return (
      <React.Fragment>
        {articles.map(article => (
          <Article key={article._id} article={article} />
        ))}
      </React.Fragment>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  getArticles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  articles: state.article.articles
});

export default connect(
  mapStateToProps,
  {getArticles}
)(Articles);

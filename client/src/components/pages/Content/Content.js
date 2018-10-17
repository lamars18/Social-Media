import React, { Component } from 'react';

import Wrapper from "../../layout/Wrapper";
import Articles from '../../articles/Articles';

import "./Content.css";

class Content extends Component {

  render() {
    return (
      <section className="content-section">
        CONTENT PAGE
        <Wrapper>
          <Articles></Articles>
        </Wrapper>
      </section>
    )
  }
}

export default Content;

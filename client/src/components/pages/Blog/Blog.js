import React from 'react';
// import React, { Component } from 'react';

class Blog extends React.Component {
  render() {
      return (
        <div>
          <div id="disqus_thread" />
          <noscript>Please enable JavaScript to view the &lt;a href="https://disqus.com/?ref_noscript"&gt;comments powered by Disqus.&lt;/a&gt;</noscript>
        </div>
      );
    }
  }

  export default Blog  
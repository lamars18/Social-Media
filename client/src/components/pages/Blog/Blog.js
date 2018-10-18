import React from 'react';
// import React, { Component } from 'react';


var disqus_config = function () {
  this.page.url = 'https://coder-2.disqus.com/embed.js';  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = 'https://coder-2.disqus.com/embed.js'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  
  (function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://coder-2.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();

class Blog extends React.Component {
  render() {
      return (
        <div>
          <div id="disqus_thread" />
          <noscript>Please enable JavaScript to view the &lt;a href="https://disqus.com/?ref_noscript"&gt;comments powered by Disqus.&lt;/a&gt;</noscript>
          <script id="dsq-count-scr" src="//coder-2.disqus.com/count.js" async></script>                       
        </div>
      );
    }
  }

  export default Blog  
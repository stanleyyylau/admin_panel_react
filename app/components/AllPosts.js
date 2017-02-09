var React = require('react');
import SinglePost from './SinglePost';


function AllPosts () {
  return (
    <div className="post-wrap">
      <h2>I will display all posts here...</h2>
      <a className="addNew" href="#">New Post</a>
      <SinglePost postId="fjoweijfoaejrwfoiji" title="My first React Title"/>
      <SinglePost postId="fjoweijfoaejrfaerffoiji" title="My second React Title"/>
      <SinglePost postId="fjoweijfoaejrwfaferi" title="My third React Title"/>
      <SinglePost postId="fjoweijfoaejrwfwfre" title="My fourth React Title"/>
    </div>
  )
}

module.exports = AllPosts;

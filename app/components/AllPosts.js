var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

import SinglePost from './SinglePost';

import RaisedButton from 'material-ui/RaisedButton';

function AllPosts (props) {
  const allPosts = props.posts.map((post)=>{
    return <SinglePost key={post._id} postId={post._id} title={post.title} 
            handlePostDelete={props.handlePostDelete}
            handlePostEdit={props.handlePostEdit}
            />
  })

  return (
    <div className="post-wrap">
      <h2>I will display all posts here...</h2>
      <Link to='/dashboard/new'>
        <RaisedButton label="New Post" primary={true}  />
      </Link>
      {allPosts}
    </div>
  )
}

module.exports = AllPosts;

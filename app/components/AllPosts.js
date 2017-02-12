var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

import SinglePost from './SinglePost';

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
      <Link to='/st-admin/dashboard/new'>
        <button className="addNew">New Post</button>
      </Link>
      {allPosts}
    </div>
  )
}

module.exports = AllPosts;

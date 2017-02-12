var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

import SinglePost from './SinglePost';

import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

const style = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#dfd7d7'
}

function AllPosts (props) {
  const allPosts = props.posts.map((post)=>{
    return <SinglePost key={post._id} postId={post._id} title={post.title} 
            handlePostDelete={props.handlePostDelete}
            handlePostEdit={props.handlePostEdit}
            />
  })

  return (
    <div className="post-wrap">
      <Link to='/dashboard/new'>
        <RaisedButton label="New Post" primary={true}  style={{marginBottom:'20px'}}/>
      </Link>
      <List style={style}>
      {allPosts}
      </List>
    </div>
  )
}

module.exports = AllPosts;

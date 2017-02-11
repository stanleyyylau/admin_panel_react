var React = require('react');

function SinglePost (props) {
  return (
    <div className="item" key={props.postId}>
        <p>{props.title}</p>
        <a href={"/"+props.postId} target="blank">Preview</a>
        <a onClick={()=>{props.handlePostEdit(props.postId)}}>edit</a>
        <a className="J_delete" onClick={()=>{props.handlePostDelete(props.postId)}}>delete</a>
    </div>
  )
}

module.exports = SinglePost;
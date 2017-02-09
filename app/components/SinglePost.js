var React = require('react');

function SinglePost (props) {
  return (
    <div className="item" key={props.postId}>
        <p>{props.title}</p>
        <a href={"/"+props.postId} target="blank">Preview</a>
        <a href={"/admin/dashboard/edit?postId="+props.postId}>edit</a>
        <a className="J_delete" href="#">delete</a>
    </div>
  )
}

module.exports = SinglePost;
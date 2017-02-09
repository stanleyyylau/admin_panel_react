var React = require('react');

function EditPost (props) {
  return (
    <div className="edit-post-wrap">
      <h2>{props.action}</h2>
      <input placeholder="Please enter your title here" />
      <textarea rows="30" cols="100" placeholder="Please enter the post here" />
      <div>
        <a className="btn-save" href="#">Save</a>    
      </div>
    </div>
  )
}

module.exports = EditPost;
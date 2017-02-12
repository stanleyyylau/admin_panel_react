var React = require('react');

var EditPost = function(props){
  return (
    <div className="edit-post-wrap">
      <h2>{props.action}</h2>
      <input onChange={props.handleTitleInput} placeholder="Please enter your title here" value={props.title} />
      <textarea onChange={props.handleMarkdownInput} rows="30" cols="100" placeholder="Please enter the post here" value={props.markdown} />
      <div>
        <a className="btn-save" onClick={props.handleUpdate}>Save</a>    
      </div>
    </div>
  )
}

module.exports = EditPost;
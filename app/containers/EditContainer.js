var React = require('react');
import EditPost from '../components/EditPost';
import helpers from '../utils/ajaxHelpers.js';


var EditContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {post:{}}
  },
  componentDidMount: function(){
    var self = this;
    helpers.getPostInfo(this.props.routeParams.postId)
    .then((result)=>{
      self.setState({
        title: result.data.post.title,
        markdown: result.data.post.markdown,
        postId: result.data.post._id
      })
    })
  },
  handleTitleInput: function(e){
    this.setState({
      title: e.target.value
    })
  },
  handleMarkdownInput: function(e){
    this.setState({
      markdown: e.target.value
    })
  },
  handleUpdate: function(){
    var self = this;
    helpers.updatePost(this.state.title, this.state.markdown, this.state.postId)
    .then((result)=>{
      console.log(result)
      if(result.data.errorCode === 0){
        self.context.router.push('/st-admin/dashboard/')
      }
    })
  },
  render: function () {
    return (
      <div>
        {this.props.routeParams.postId}
        <EditPost action="Trying to edit..."
        handleMarkdownInput={this.handleMarkdownInput}
        handleTitleInput={this.handleTitleInput}
        handleUpdate={this.handleUpdate}
        postId={this.state.postId}
        title={this.state.title}
        markdown={this.state.markdown}
        />
      </div>
      
    )
  }
});

module.exports = EditContainer;
var React = require('react');
import EditPost from '../components/EditPost';
import helpers from '../utils/ajaxHelpers.js';


var NewContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      title: "",
      markdown: ""
    }
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
    helpers.updatePost(this.state.title, this.state.markdown)
    .then((result)=>{
      console.log(result)
      if(result.data.errorCode === 0){
        self.context.router.push('/dashboard/')
      }
    })
  },
  render: function () {
    return (
      <EditPost action="Creating a new post..."
        handleMarkdownInput={this.handleMarkdownInput}
        handleTitleInput={this.handleTitleInput}
        handleUpdate={this.handleUpdate}
        title={this.state.title}
        markdown={this.state.markdown}
      />
    )
  }
});

module.exports = NewContainer;
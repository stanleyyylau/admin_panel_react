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
      console.log(result)
      self.setState({post:result.data.post})
    })
  },
  render: function () {
    return (
      <div>
        {this.props.routeParams.postId}
        <EditPost action="Trying to edit..."
        postId={this.state.post._id}
        title={this.state.post.title}
        markdown={this.state.post.markdown}
        />
      </div>
      
    )
  }
});

module.exports = EditContainer;
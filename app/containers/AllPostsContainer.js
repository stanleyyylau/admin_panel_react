var React = require('react');
import AllPosts from '../components/AllPosts';
import helpers from '../utils/ajaxHelpers.js';


var AllPostsContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {posts: []};
    },
    getAllPosts: function(){
        var self = this;
         helpers.getAllPost()
        .then((result) =>{
            console.log(result)
            self.setState({posts:result.data.posts})
            console.log(self.state)
        })
    },
    componentDidMount: function(){
        var self = this;
        self.getAllPosts()
    },
    handlePostDelete: function(postId){
        var self = this;
        helpers.deletePost(postId)
        .then((result)=>{
            console.log(result)
            if(result.data.errorCode ===0){
                self.getAllPosts()
            }
        })
    },
    handlePostEdit: function(postId){
        console.log(postId)
        this.context.router.push('/dashboard/edit/' + postId)
    },
  render: function () {
    return (
      <AllPosts posts={this.state.posts} 
        handlePostDelete={this.handlePostDelete}
        handlePostEdit={this.handlePostEdit}
      />
    )
  }
});

module.exports = AllPostsContainer;
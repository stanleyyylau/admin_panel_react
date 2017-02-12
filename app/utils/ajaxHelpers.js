var axios = require('axios');

var helpers = {
  login: function(account, password){
    return axios.post('http://localhost:4545/admin',{account, password})
  },
  getAllPost: function(){
    return axios.get('http://localhost:4545/admin/dashboard')
  },
  deletePost: function(postId){
    return axios.post('http://localhost:4545/admin/dashboard/delete',{postId, postId})
  },
  updatePost: function(title, content, postId){
    if (postId){
      return axios.post('http://localhost:4545/admin/dashboard/update',{postId, title, content})
    }else{
      return axios.post('http://localhost:4545/admin/dashboard/update',{title, content})
    }
  },
  getPostInfo: function(postId){
    return axios.get('http://localhost:4545/admin/dashboard/edit?postId=' + postId)
  }
};

module.exports = helpers;
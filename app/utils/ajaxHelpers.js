var axios = require('axios');

var helpers = {
  login: function(account, password){
    return axios.post('https://fullstackjourney.herokuapp.com/admin',{account, password})
  },
  getAllPost: function(){
    return axios.get('https://fullstackjourney.herokuapp.com/admin/dashboard')
  },
  deletePost: function(postId){
    return axios.post('https://fullstackjourney.herokuapp.com/admin/dashboard/delete',{postId, postId})
  },
  updatePost: function(title, content, postId){
    if (postId){
      return axios.post('https://fullstackjourney.herokuapp.com/admin/dashboard/update',{postId, title, content})
    }else{
      return axios.post('https://fullstackjourney.herokuapp.com/admin/dashboard/update',{title, content})
    }
  },
  getPostInfo: function(postId){
    return axios.get('https://fullstackjourney.herokuapp.com/admin/dashboard/edit?postId=' + postId)
  }
};

module.exports = helpers;
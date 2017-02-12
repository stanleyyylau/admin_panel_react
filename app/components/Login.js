var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;
// require('../styles/login.css');

import helpers from '../utils/ajaxHelpers.js';

var Login = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      account: '',
      password: ''
    }
  },
  handleAccountChange: function(event){
    this.setState({account: event.target.value});
  },
  handlePasswordChange: function(event){
    this.setState({password: event.target.value});
  },
  handleLogin: function(e){
    e.preventDefault();
    helpers.login(this.state.account, this.state.password)
    .then((result)=>{
      if(result.data.errorCode === 0){
        this.context.router.push({
          pathname: '/st-admin/dashboard'
        })        
      }
    })
  },
  render: function(){
    return (
    <div className="login">
      <form>
        <div className="row">
          <h1>Login to backend...</h1>
        </div>
        <div className="row">
          <input name="account" type="text" placeholder="your account here"  onChange={this.handleAccountChange}/>
        </div>
        <div className="row">
          <input name="password" type="password" placeholder="your password here"  onChange={this.handlePasswordChange}/>
        </div>
        <div className="row">
          <input value="login" type="submit" onClick={this.handleLogin} />
        </div>
      </form>
    </div>
  )}
})

module.exports = Login;
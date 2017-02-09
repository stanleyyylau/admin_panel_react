var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('./MainContainer');
// require('../styles/login.css');

function Login () {
  return (
    <div className="login">
      <form action="/admin" method="POST">
        <div className="row">
          <h1>Login to backend...</h1>
        </div>
        <div className="row">
          <input name="account" type="text" placeholder="your account here"/>
        </div>
        <div className="row">
          <input name="password" type="password" placeholder="your password here"/>
        </div>
        <div className="row">
          <input type="submit" value="login"/>
        </div>
      </form>
    </div>
  )
}

module.exports = Login;
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Login = require("../components/Login");
var Dashboard = require("../components/Dashboard");
var AllPosts = require('../components/AllPosts');
var EditPost = require('../components/EditPost');

var EditContainer = require('../containers/EditContainer');
var NewContainer = require('../containers/NewContainer');
var AllPostsContainer = require('../containers/AllPostsContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Login} />
      <Route path='dashboard' component={Dashboard}>
        <IndexRoute component={AllPostsContainer} />
        <Route path='edit/:postId' component={EditContainer} />
        <Route path='new' component={NewContainer} />
      </Route>  
    </Route>
  </Router>
);

module.exports = routes;

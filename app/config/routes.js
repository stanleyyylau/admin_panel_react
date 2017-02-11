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
var UpdateContainer = require('../containers/UpdateContainer');
var AllPostsContainer = require('../containers/AllPostsContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Login} />
      <Route path='dashboard' component={Dashboard}>
        <IndexRoute component={AllPostsContainer} />
        <Route path='edit/:postId' component={EditContainer} />
        <Route path='update' component={UpdateContainer} />
      </Route>  
    </Route>
  </Router>
);

module.exports = routes;



/*var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Login} />
      <Route path='dashboard' header='Player One' component={Dashboard} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='battle' component={ConfirmBattleContainer} />
      <Route path='results' component={ResultsContainer} />
    </Route>
  </Router>
);*/
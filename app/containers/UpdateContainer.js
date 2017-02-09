var React = require('react');
var githubHelpers = require('../utils/githubHelpers');
import EditPost from '../components/EditPost';


var EditContainer = React.createClass({
  render: function () {
    return (
      <EditPost action="Trying to update..."/>
    )
  }
});

module.exports = EditContainer;
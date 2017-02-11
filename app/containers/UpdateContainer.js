var React = require('react');
import EditPost from '../components/EditPost';


var EditContainer = React.createClass({
  render: function () {
    return (
      <EditPost action="Trying to update..." markdown="这里是markdown" title="这里是title"/>
    )
  }
});

module.exports = EditContainer;
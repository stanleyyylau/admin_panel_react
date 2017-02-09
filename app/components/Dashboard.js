var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
// import { Button } from 'react-toolbox/lib/button';

function Dashboard (props) {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>
            <a href="#">All Post</a>
          </li>
          <li>
            <a href="#">Site Setting</a>
          </li>
          <li>
            <a href="#">Exit</a>
          </li>
        </ul>
      </div>
      <div className="wrap">
          {props.children}
      </div>
    </div>
  )
}


module.exports = Dashboard
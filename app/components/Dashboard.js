var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

import FlatButton from 'material-ui/FlatButton';

var ReactRouter = require('react-router');
var Link = ReactRouter.Link

const style = {
  textAlign: 'left'
};


function Dashboard (props) {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>
            <Link to='/st-admin/dashboard'>
                <FlatButton label="All Post" style={style} />
            </Link>
          </li>
          <li>
                <FlatButton label="Site Setting" style={style} />
          </li>
          <li>
                <FlatButton label="Exit" style={style} />
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
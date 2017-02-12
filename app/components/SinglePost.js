var React = require('react');
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionInfo from 'material-ui/svg-icons/action/info';

import {List, ListItem} from 'material-ui/List';


function SinglePost (props) {

  const coolIcon = (<IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <a style={{textDecoration: 'none'}} href={"/"+props.postId} target="blank"><MenuItem primaryText="Preview" /></a>
      <MenuItem primaryText="edit" onClick={()=>{props.handlePostEdit(props.postId)}}/>
      <MenuItem primaryText="delete" onClick={()=>{props.handlePostDelete(props.postId)}}/>
    </IconMenu>)

  return (
    <div className="item" key={props.postId}>
        <ListItem primaryText={props.title}  rightIcon={coolIcon}/>
    </div>
  )
}

module.exports = SinglePost;

/*function SinglePost (props) {

  const coolIcon = (<IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <a style={{textDecoration: 'none'}} href={"/"+props.postId} target="blank"><MenuItem primaryText="Preview" /></a>
      <MenuItem primaryText="edit" onClick={()=>{props.handlePostEdit(props.postId)}}/>
      <MenuItem primaryText="delete" onClick={()=>{props.handlePostDelete(props.postId)}}/>
    </IconMenu>)

  return (
    <div className="item" key={props.postId}>
        <ListItem primaryText={props.title}  rightIcon={coolIcon}/>
    </div>
  )
}*/
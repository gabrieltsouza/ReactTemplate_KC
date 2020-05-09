import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider';

import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { Link } from 'react-router-dom'
import menuItems from './menuAppSource.json'


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  links: {
    textDecoration:'none'
  },
  menuHeader: {
    paddingLeft: '30px'
  }
};

class MenuApp extends Component {
  constructor( props ) {
    super( props )
    this.state = {MainMenu:false,MainMenuName:"menu_left",SubMenuControl:true}
  }

  // This methods will controle when menu shows or not
toggleDrawer = (open) => (event) => {
  console.log("toggleDrawer 0" + open + event.type + event.key);
  if ((event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) || (!this.state.SubMenuControl)) {
    this.setState({SubMenuControl:true})
    console.log("toggleDrawer 1");
    return;
  }
  console.log("toggleDrawer 2");
  console.log("toggleDrawer 3 " + this.state.MainMenu);
  this.setState({MainMenu:open})
  console.log("toggleDrawer 4 " + this.state.MainMenu);
}
// this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
handleClick( item ) {
    this.toggleDrawer(true)
    this.setState( prevState => ( 
      { [ item ]: !prevState[ item ] } 
    ) )
  }
// if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
handler( children ) {
    const { classes } = this.props
    const { state } = this
return children.map( ( subOption ) => {
      if ( !subOption.children ) {
        return (
          <div key={ subOption.name }
          onClick={this.toggleDrawer(false)}
          onKeyDown={this.toggleDrawer(false)}
          >
            <ListItem 
              button 
              key={ subOption.name }>
              <Link 
                to={ subOption.url }
                className={ classes.links }>
                <ListItemIcon><VerticalSplitIcon/></ListItemIcon>
                <ListItemText 
                  inset
                  primary={ subOption.name } 
                />
              </Link>
            </ListItem>
            <Divider />
          </div>
        )
      }
      return (
        <div key={ subOption.name }
        >
          <ListItem 
            onClick={ () => this.handleClick( subOption.name )}
            onKeyDown={this.toggleDrawer(true)}
            button 
            >
            <ListItemIcon><VerticalSplitIcon/></ListItemIcon>
            <ListItemText 
              inset 
              primary={ subOption.name } />
            { state[ subOption.name ] ? 
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>
          <Collapse 
            in={ state[ subOption.name ] } 
            timeout="auto" 
            unmountOnExit
          >
            { this.handler( subOption.children ) }
          </Collapse>
        </div>
      )
    } )
  }
render() {
    const { classes } = this.props
    return (
      <div className={classes.list}>
        <React.Fragment key={this.state.MainMenuName}>
        <IconButton onClick={this.toggleDrawer(true)} color="primary" aria-label="Open Menu">
          <VerticalSplitIcon/>
        </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={this.state.MainMenu}
            onClose={this.toggleDrawer(false)}
            onOpen={this.toggleDrawer(true)}
            classes={ { paper: classes.list } }>
          <div
              role="presentation"
              //onClick={this.toggleDrawer(false)}
              //onKeyDown={this.toggleDrawer(false)}
              >
            <List>
              <ListItem 
                key="menuHeading"
                divider
                disableGutters
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}
                >
                  <ListItemText
                    className={ classes.menuHeader }
                    inset
                    primary="Menu"
                  />
              </ListItem>
            { this.handler( menuItems.data ) }
            </List>
          </div>
        </SwipeableDrawer>
        </React.Fragment>
      </div>
    )
  }
}
export default withStyles(styles)(MenuApp)

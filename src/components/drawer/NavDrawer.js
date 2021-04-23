import React from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import SocialIcons from "../bio/SocialIcons";

const propTypes = {
  open: PropTypes.bool.isRequired,
  onDrawerClose: PropTypes.func.isRequired,
};

const listConfig = [
  { icon: "🏠", text: "Home" },
  { icon: "📂", text: "Categories" },
  { icon: "🔖", text: "Tags" },
];

const useStyles = makeStyles({
  socialIcons: { margin: "1rem 3rem" },
  navList: { width: "300px", fontSize: "1.2rem" },
});

function NavDrawer({ open, onDrawerClose }) {
  const classes = useStyles();

  const onNavKeyDown = (e) => {
    if (e.key === "Enter") onDrawerClose();
  };

  const renderedList = listConfig.map((listItem) => (
    <ListItem key={listItem.text} button>
      <ListItemIcon>{listItem.icon}</ListItemIcon>
      <ListItemText primary={listItem.text} />
    </ListItem>
  ));

  return (
    <Drawer anchor="left" open={open} onClose={onDrawerClose}>
      <div
        className={classes.navList}
        onClick={onDrawerClose}
        onKeyDown={onNavKeyDown}
      >
        <div className={classes.socialIcons}>
          <SocialIcons />
        </div>
        <List component="nav" aria-label="main menu">
          {renderedList}
        </List>
      </div>
    </Drawer>
  );
}

NavDrawer.propTypes = propTypes;

export default NavDrawer;

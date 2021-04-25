import { Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import UserProfile from "./bio/UserProfile";

const useStyles = makeStyles({
  root: {
    marginTop: "8rem",
  },
  divider: {
    margin: "1rem 0",
  },
  copyrights: {
    textAlign: "right",
    padding: "1.5rem 0",
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <UserProfile />
      <Divider className={classes.divider} />
      <div className={classes.copyrights}>
        <Typography variant="caption" color="textSecondary">
          © 2021 Some Rights Reserved
        </Typography>
      </div>
    </div>
  );
}

export default Footer;

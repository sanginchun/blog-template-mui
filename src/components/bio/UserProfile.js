import {
  Grid,
  Box,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import SocialIcons from "./SocialIcons";

const useStyles = makeStyles({
  img: {
    width: "128px",
    height: "128px",
    objectFit: "cover",
    borderRadius: "5px",
  },
});

function UserProfile() {
  const classes = useStyles();

  const matches = useMediaQuery("(max-width: 960px)");
  return (
    <Grid container spacing={2}>
      <Grid style={{ textAlign: "center" }} item xs={12} md="auto">
        <img
          className={classes.img}
          src="https://source.unsplash.com/random/200*200"
          alt="user"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Box textAlign={matches ? "center" : "left"}>
          <Typography variant="h6" color="primary">
            UserName
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Developer, Lorem ipsum dolor.
          </Typography>
        </Box>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum itaque
          iure eum voluptas, consectetur impedit repudiandae expedita enim
          quibusdam veniam!
        </p>
      </Grid>
      <Grid item xs={12} md="auto">
        <SocialIcons />
      </Grid>
    </Grid>
  );
}

export default UserProfile;

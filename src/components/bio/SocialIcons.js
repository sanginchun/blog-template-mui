import { Grid, IconButton } from "@material-ui/core";
import { FiMail, FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import React from "react";

const iconConfig = { size: 20 };

function SocialIcons() {
  return (
    <Grid container justify="center">
      <Grid item>
        <IconButton>
          <FiMail size={iconConfig.size} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <FiGithub size={iconConfig.size} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <FiFacebook size={iconConfig.size} />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <FiLinkedin size={iconConfig.size} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default SocialIcons;

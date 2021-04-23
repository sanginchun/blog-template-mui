import React, { useState } from "react";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import SearchIcon from "@material-ui/icons/Search";
import SearchField from "./search/SearchField";
import SearchDialog from "./search/SearchDialog";

const useStyles = makeStyles({
  header: { padding: "0 0.5rem" },
  title: { padding: "1.1rem 0" },
  iconButtonLg: { fontSize: "2rem" },
});

function Header() {
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const renderedSearch = matches ? (
    <>
      <IconButton aria-label="search" onClick={() => setSearchDialogOpen(true)}>
        <SearchIcon />
      </IconButton>
      <SearchDialog
        open={searchDialogOpen}
        onClose={() => setSearchDialogOpen(false)}
      />
    </>
  ) : (
    <SearchField />
  );

  return (
    <Box className={classes.header}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={2}>
          <IconButton aria-label="menu" className={classes.iconButtonLg}>
            <MenuIcon fontSize={matches ? "default" : "inherit"} />
          </IconButton>
        </Grid>
        <Grid item className={classes.title}>
          <Typography variant={matches ? "h6" : "h5"}>
            Username's Blog
          </Typography>
        </Grid>
        <Grid item container xs={2} justify="flex-end">
          {renderedSearch}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;

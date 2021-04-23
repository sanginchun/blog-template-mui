import React, { useState } from "react";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import { FiMenu, FiSearch } from "react-icons/fi";

import SearchField from "./search/SearchField";
import SearchDialog from "./search/SearchDialog";

const useStyles = makeStyles({
  header: { padding: "0 0.5rem" },
  title: { padding: "1.1rem 0" },
  iconButtonLg: { fontSize: "2rem" },
});

function Header({ onDrawerOpen }) {
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const onMenuKeyDown = (e) => {
    if (e.key === "Enter") onDrawerOpen();
  };

  const renderedSearch = matches ? (
    <>
      <IconButton aria-label="search" onClick={() => setSearchDialogOpen(true)}>
        <FiSearch />
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
          <IconButton
            aria-label="menu"
            className={classes.iconButtonLg}
            onClick={onDrawerOpen}
            onKeyDown={onMenuKeyDown}
          >
            <FiMenu size={matches ? 20 : 30} />
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

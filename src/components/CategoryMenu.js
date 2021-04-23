import React from "react";
import {
  Box,
  CardContent,
  CardHeader,
  Chip,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    maxHeight: "600px",
    overflowY: "hidden",
    "&:hover": { overflowY: "auto" },
  },
  list: { fontWeight: "300" },
  listItem: { padding: "0.5rem" },
});

const categoryConfig = [
  { text: "All", count: 10 },
  { text: "Project", count: 1 },
  { text: "HTML", count: 2 },
  { text: "JavaScript", count: 3 },
  { text: "CSS", count: 4 },
  { text: "SASS", count: 3 },
  { text: "React", count: 2 },
  { text: "Vue", count: 1 },
  { text: "Algorithm", count: 2 },
];

function CategoryMenu() {
  const classes = useStyles();

  const renderedList = categoryConfig.map((listItem) => (
    <ListItem
      className={classes.listItem}
      key={listItem.text}
      button
      disableGutters
    >
      <ListItemText primary={listItem.text} />
      <ListItemSecondaryAction>
        <Chip size="small" label={listItem.count} />
      </ListItemSecondaryAction>
    </ListItem>
  ));
  return (
    <Box>
      <Paper className={classes.paper} elevation={0} variant="outlined">
        <CardHeader
          title="Categories"
          titleTypographyProps={{
            variant: "subtitle2",
            color: "textSecondary",
          }}
        />
        <CardContent>
          <List
            className={classes.list}
            component="nav"
            aria-label="category menu"
          >
            {renderedList}
          </List>
        </CardContent>
      </Paper>
    </Box>
  );
}

export default CategoryMenu;

import React from "react";
import {
  Grid,
  Paper,
  CardContent,
  makeStyles,
  Box,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles({
  postItem: {
    marginBottom: "0.8rem",
    transition: "transform 0.2s linear",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.01)",
      transition: "transform 0.2s linear",
    },
  },
  img: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "cover",
    borderRadius: "5px",
  },
});

function PostExcerpt({ post }) {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Paper className={classes.postItem} elevation={0} variant="outlined">
      <CardContent>
        <Grid
          container
          spacing={1}
          alignItems="center"
          direction={matches ? "column-reverse" : "row"}
        >
          <Grid item xs={12} sm={10} md={11} lg={10}>
            <Box>
              <Typography variant="subtitle1">{post.title}</Typography>
              <p>{post.excerpt}</p>
              <Typography variant="caption" color="textSecondary">
                {post.date}
              </Typography>
            </Box>
          </Grid>
          <Grid container item xs={12} sm={2} md={1} lg={2}>
            <img
              className={classes.img}
              src={post.img}
              alt={post.img.slice(10)}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
}

export default PostExcerpt;

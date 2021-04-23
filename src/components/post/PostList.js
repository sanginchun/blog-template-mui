import { Grid } from "@material-ui/core";
import React from "react";

import PostExcerpt from "./PostExcerpt";
import { posts } from "./dummyPosts";

function PostList() {
  const renderedPostList = posts.map((post, index) => (
    <Grid item key={index}>
      <PostExcerpt post={post} />
    </Grid>
  ));

  return (
    <Grid container>
      <Grid item container xs={12}>
        {renderedPostList}
      </Grid>
    </Grid>
  );
}

export default PostList;

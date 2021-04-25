import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";

import PostExcerpt from "./PostExcerpt";
import { posts } from "./dummyPosts";

const POST_PER_PAGE = 8;

function PostList() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const postStart = (page - 1) * POST_PER_PAGE;

  const renderedPostList = posts
    .slice(postStart, postStart + POST_PER_PAGE)
    .map((post, index) => (
      <Grid item key={index}>
        <PostExcerpt post={post} />
      </Grid>
    ));

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item container xs={12}>
        {renderedPostList}
      </Grid>
      <Grid item>
        <Pagination
          count={Math.ceil(posts.length / POST_PER_PAGE)}
          page={page}
          onChange={handleChange}
          color="primary"
          size="large"
        />
      </Grid>
    </Grid>
  );
}

export default PostList;

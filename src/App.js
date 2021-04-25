import React, { useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
import NavDrawer from "./components/drawer/NavDrawer";
import PostList from "./components/post/PostList";
import CategoryMenu from "./components/CategoryMenu";
import Footer from "./components/Footer";

const HEADER_HEIGHT = "4.5rem";

const useStyle = makeStyles({
  header: {
    position: "sticky",
    height: HEADER_HEIGHT,
    top: 0,
    zIndex: "100",
    backgroundColor: "#fff",
    opacity: 0.9,
  },
  categoryMenu: {
    position: "sticky",
    top: `calc(${HEADER_HEIGHT} - 0.5rem)`,
    alignSelf: "flex-start",
  },
});

function App() {
  const classes = useStyle();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Container maxWidth="lg">
      <NavDrawer open={drawerOpen} onDrawerClose={() => setDrawerOpen(false)} />
      <header className={classes.header}>
        <Header onDrawerOpen={() => setDrawerOpen(true)} />
      </header>
      <main>
        <Grid container spacing={2}>
          <Grid item container xs={12} lg={8}>
            <PostList />
          </Grid>
          <Grid className={classes.categoryMenu} item xs={12} lg={4}>
            <CategoryMenu />
          </Grid>
        </Grid>
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default App;

import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import NavDrawer from "./components/drawer/NavDrawer";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Container maxWidth="lg">
      <NavDrawer open={drawerOpen} onDrawerClose={() => setDrawerOpen(false)} />
      <Header onDrawerOpen={() => setDrawerOpen(true)} />
    </Container>
  );
}

export default App;

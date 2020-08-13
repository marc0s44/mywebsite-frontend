import React from "react";

const layout = (props) => (
  <React.Fragment>
    <header>Toolbar, SideDrawer</header>
    <main>{props.children}</main>
    <footer>Footer</footer>
  </React.Fragment>
);

export default layout;

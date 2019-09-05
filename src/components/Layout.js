import React from "react";

import BackToBlog from "./BackToBlog";
import Footer from "./Footer";
import Title from "./Title";

import "../styles/unsystem.scss";
import "./Layout.scss";

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    const isRoot = location.pathname === `${__PATH_PREFIX__}/`;

    return (
      <div className="layout center">
        <div className="content stack">
          <Title />
          {children}
          {!isRoot ? <BackToBlog /> : null}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;

import React from "react";

import Footer from "./Footer";
import BackToBlog from "./BackToBlog";

import "../styles/unsystem.scss";
import Title from "./Title";

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    const isRoot = location.pathname === `${__PATH_PREFIX__}/`;

    return (
      <div className="layout center">
        <div className="content stack">
          <Title />
          {children}
          {isRoot ? null : <BackToBlog />}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;

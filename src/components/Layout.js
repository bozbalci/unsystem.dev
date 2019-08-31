import React from "react";
import { Link } from "gatsby";

import Footer from "./Footer";
import BackToBlog from "./BackToBlog";

import "../styles/global.scss";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const isRoot = location.pathname === `${__PATH_PREFIX__}/`;

    return (
      <div className="layout">
        <div className="content">
          <header>
            <h1 className="title">
              <Link to={`/`}>{title}</Link>
            </h1>
          </header>
          {children}
          {isRoot ? null : (
            <nav>
              <BackToBlog />
            </nav>
          )}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;

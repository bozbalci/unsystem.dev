import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

import Footer from "./Footer";
import BackToBlog from "./BackToBlog";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const isRoot = location.pathname === `${__PATH_PREFIX__}/`;
    let header;

    if (isRoot) {
      header = (
        <h1
          style={{
            ...scale(3 / 2),
            marginBottom: rhythm(1),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Raleway, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: rhythm(30),
        }}
      >
        <div
          style={{
            margin: rhythm(1 / 2),
            padding: `${rhythm(3 / 2)} ${rhythm(3 / 4)}`,
            backgroundColor: `white`,
            borderRadius: `16px`,
          }}
        >
          <div>
            <header>{header}</header>
            {children}
            {isRoot ? null : (
              <nav>
                <BackToBlog />
              </nav>
            )}
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;

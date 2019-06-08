import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

import Footer from './Footer';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
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
      <div style={{
        margin: `0 auto`,
        maxWidth: rhythm(30),
      }}>
        <div
          style={{
            margin: rhythm(0.5),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            backgroundColor: `white`,
            borderRadius: `16px`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;

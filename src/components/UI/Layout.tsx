import React from 'react';

const Layout: React.FunctionComponent = ({ children }) => (
  <React.Fragment>
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <span className="box nav-title">Sieve of Eratosthenes </span>
        </div>
      </div>
    </nav>
    <section className="hero is-fullheight-with-navbar is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
            <div className="column">{children}</div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Layout;

import React from "react";
import './navbar.component.css';

export default class NavbarStaticComponent extends React.Component {

  render(): React.ReactNode {
    return (
      <header id="navbar" className="pcd-navbar">
        <nav className="container content">
          <p>Navbar works!</p>
        </nav>
      </header>
    )
  }

}

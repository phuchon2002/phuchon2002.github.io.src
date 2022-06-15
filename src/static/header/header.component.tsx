import React from "react";
import './header.component.css';

export default class HeaderStaticComponent extends React.Component {

  render(): React.ReactNode {
    return (
      <header id="header" className="pcd-header">
        <div className="container content">
          <p>Header works!</p>
        </div>
      </header>
    )
  }

}

import React from "react";
import './footer.component.css';

export default class FooterStaticComponent extends React.Component {

  render(): React.ReactNode {
    return (
      <footer id="footer" className="pcd-footer">
        <div className="container content">
          <p>Footer works!</p>
        </div>
      </footer>
    )
  }

}

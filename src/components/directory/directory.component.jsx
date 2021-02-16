import React from "react";
import { MenuItem } from "../menu-item/menu-item.component";
import "./directory.styles.scss";

import { SECTIONS_DATA } from "./mock-data";
export class Directory extends React.Component {
  state = {
    sections: SECTIONS_DATA,
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem section={section} key={section.id} />
        ))}
      </div>
    );
  }
}

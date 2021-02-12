import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuCardItem = ({ section, history, match }) => (
  <div
    className={`${section.size} menu-item`}
    onClick={() => history.push(`${match.url}${section.linkUrl}`)}
    style={{ backgroundImage: `url(${section.imageUrl})` }}
  >
    <div className="content">
      <h1 className="title">{section.title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export const MenuItem = withRouter(MenuCardItem);

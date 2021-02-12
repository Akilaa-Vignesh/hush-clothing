import React from "react";
import "./menu-item.styles.scss";

export const MenuItem = ({ section }) => (
  <div
    className={`${section.size} menu-item`}
    style={{ backgroundImage: `url(${section.imageUrl})` }}
  >
    <div className="content">
      <h1 className="title">{section.title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

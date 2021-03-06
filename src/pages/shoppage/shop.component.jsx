import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";
import "./shop.styles.scss";

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

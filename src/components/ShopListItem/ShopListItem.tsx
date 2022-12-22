import React from "react";
import { useState } from "react";

interface ICustomComponentProps {
  urlToShop: string;
  shopName: string;
}

const ShopListItem = (props: ICustomComponentProps) => {
  const { urlToShop, shopName } = props;
  return (
    <li>
      <a
        className="link-to-shop"
        target="_blank"
        rel="noopener noreferrer"
        href={urlToShop}
      >
        (Przejdź){" "}
      </a>
      {shopName}
    </li>
  );
};

export default ShopListItem;

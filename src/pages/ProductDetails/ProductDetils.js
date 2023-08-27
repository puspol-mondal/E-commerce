import React from "react";
import ProductDetails from "../../features/product/components/ProductDetails";
import Navbar from "../../features/navbar/Navbar";

function ProductDetils() {
  return (
    <>
      <Navbar>
        <ProductDetails />
      </Navbar>
    </>
  );
}

export default ProductDetils;

import React from "react";
import { useParams } from "react-router-dom";
function Product() {
    let { id } = useParams();
  // var { match } = this.props;
  // var name = match.params.name;
  return <h1>Day la trang chi tiet san pham: {id}</h1>;
}

export default Product;

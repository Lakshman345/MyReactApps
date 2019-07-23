import React, { useState, useEffect } from "react";
const Productpage = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // By moving this function inside the effect, we can clearly see the values it uses.
    async function fetchProduct() {
      const response = await fetch("http://myapi/product" + productId);
      const json = await response.json();
      setProduct(json);
    }

    fetchProduct();
  }, [productId]);
};

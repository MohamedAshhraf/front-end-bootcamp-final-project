import { useEffect, useState } from "react";

function ProductPage() {
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

  const [product, setProduct] = useState({});
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);

  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src={product.images?.[0]} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.title}</h3>
        <h3 className="product-price">${product.price}</h3>
        <p className="product-brand">Brand: {product.brand}</p>
        <p className="product-desc">{product.description}</p>
        <button className="add-to-cart" onClick={() => setAdded(true)}>Add To Cart</button>
        <p className="added" style={{display: added ? "inherit": "none"}}>Added To Cart</p>
      </div>
    </div>
  );
}

export default ProductPage;

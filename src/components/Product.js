import { useState } from "react";

function Product({ product }) {

  const [like, setLike] = useState(false);

  return (
    <div className="product">
      <div className="product-container">
        <img src={product.images?.[0]} />
        <span onClick={() => setLike(!like)} style={{color: like ? 'red': 'black'}}>&hearts;</span>
        <a href={"/product?id=" + product.id}>
          <div className="product-title">
            <div>{product.title}</div>
            <div>${product.price}</div>
          </div>

          <div className="product-desc">{product.description}</div>
        </a>
      </div>
    </div>
  );
}

export default Product;

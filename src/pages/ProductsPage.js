import { useEffect, useState } from "react";
import Product from "../components/Product";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products);
      });
  }, []);

  return (
    <div className="products-page">
      <h2>All Products</h2>
      <div className="products">
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}

export default ProductsPage;

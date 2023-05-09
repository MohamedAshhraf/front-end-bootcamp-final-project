import { useEffect, useState } from "react";
import Ad from "../components/Ad";
import Product from "../components/Product";

function HomePage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        var prods = [];
        for (var i = 0; i < 8; i++) {
          prods.push(json.products[i]);
        }
        setProducts(prods);
      });
  }, []);

  return (
    <div className="home-page">
      <Ad />
      <div className="home-products">
        <h2>Products</h2>
        <div className="products">
          {products.map(product => {
            return <Product product={product} />
          })}
        </div>
        <p className="see-more-container">
          <a href="/products">See More</a>
        </p>
      </div>
    </div>
  );
}

export default HomePage;

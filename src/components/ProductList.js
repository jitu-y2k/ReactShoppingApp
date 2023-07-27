import { useEffect, useState } from "react";
import Product from "./ProductCard";

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (selectedCategory.length > 0) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }
  });
  let loadError = null;
  let loading = false;

  if (loading) {
    return <div className="loading">Fetching Products ... </div>;
  } else if (loadError) {
    return <div>Please try again ... </div>;
  } else {
    return (
      <div className="products">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    );
  }
};
export default ProductList;

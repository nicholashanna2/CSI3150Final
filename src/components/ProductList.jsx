import { useState } from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";

//handles filtering, sorting, and displaying products
const ProductList = ({ products, addToCart, toggleWishlist, wishlist }) => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  let filtered = [...products];

  //apply category filter
  if (filter) filtered = filtered.filter(p => p.category === filter);
 
  //apply sorting by price
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <div>
      {/*filter plus sort controls*/}
      <FilterBar setFilter={setFilter} setSort={setSort} />

      {/*render product cards*/}
      <div className="products">
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
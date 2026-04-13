import { useState } from "react";
import Modal from "./Modal";

//displays product with usable buttons
const ProductCard = ({ product, addToCart, toggleWishlist, wishlist }) => {
  const [open, setOpen] = useState(false);

  //checks if product is already wishlisted
  const isFav = wishlist.find((p) => p.id === product.id);

  return (
    <div className="card">
      <h3>{product.name}</h3>
      
      {/*grabs product image*/}
      <img src={product.image} alt={product.name} className="product-img" />

      <p>${product.price}</p>
      
      {/*shows stock or out of stock*/}
      <p>
        {product.stock > 0 ? `Stock: ${product.stock}` : "Out of Stock"}
      </p>

      {/*add to cart button*/}
      <button
        className="add-btn"
        onClick={() => addToCart(product)}
        disabled={product.stock === 0}
      >
        Add to Cart
      </button>
      
      {/*wishlist toggle*/}
      <button
        className="wishlist-btn"
        onClick={() => toggleWishlist(product)}
      >
        {isFav ? "❤️" : "🤍"}
      </button>
      
      {/*opens modal*/}
      <button className="view-btn" onClick={() => setOpen(true)}>
        Info
      </button>

      {/*modal rendering*/}
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
import { useState, useEffect } from "react";
import productsData from "./data";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

//manages global state and logic
function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  
  //load wishlist from localStorage
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [promo, setPromo] = useState("");

  //save wishlist with localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  //adds item to cart and decreases stock
  const addToCart = (product) => {
    if (product.stock === 0) return;

    setProducts(prev =>
      prev.map(p =>
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p
      )
    );

    setCart(prev => [...prev, product]);
  };

  //adds or removes from wishlist
  const toggleWishlist = (product) => {
    setWishlist(prev =>
      prev.find(p => p.id === product.id)
        ? prev.filter(p => p.id !== product.id)
        : [...prev, product]
    );
  };

  //clears cart
  const clearCart = () => {
    setCart([]);
  };

  //calculates total
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  
  //applies discount with code OAKLAND20
  const discount = promo === "OAKLAND20" ? total * 0.2 : 0;

  return (
    <div>
      <Navbar cartCount={cart.length} total={total - discount} />

      <div className="container">
        <ProductList
          products={products}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
        />

        <div>
          <Cart
            cart={cart}
            total={total}
            discount={discount}
            setPromo={setPromo}
            clearCart={clearCart}  
          />
          <Wishlist wishlist={wishlist} />
        </div>
      </div>
    </div>
  );
}

export default App;
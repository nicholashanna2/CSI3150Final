//displays cart items, promo input and pricing
const Cart = ({ cart, total, discount, setPromo, clearCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {/*shows message if cart is empty*/}
      {cart.length === 0 && <p>Your cart is empty.</p>}

      {/*renders each item in the cart*/}
      {cart.map((item, i) => (
        <p key={i}>
          {item.name} - ${item.price}
        </p>
      ))}
      
      {/*promo input updates state in parent*/}
      <input
        placeholder="Promo Code"
        onChange={(e) => setPromo(e.target.value)}
      />
      
      {/*price breakdown*/}
      <p>Total: ${total}</p>
      <p>Discount: ${discount}</p>
      <h3>Final: ${total - discount}</h3>
      
      {/*clears cart*/}
      <button className="clear-btn" onClick={clearCart}>
        Clear Cart
      </button>
      
      {/*checkout button (non functional)*/}
      <button> Checkout! </button>
    </div>
  );
};

export default Cart;
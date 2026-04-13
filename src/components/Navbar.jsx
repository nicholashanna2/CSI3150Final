//displays store title and cart summary
const Navbar = ({ cartCount, total }) => {
  return (
    <nav>
      <h2>Nexus Store</h2>
      
      {/*shows number of items and total cost*/}
      <div>
        <span>Items: {cartCount} </span>
        <span>Total: ${total}</span>
      </div>
    </nav>
  );
};

export default Navbar;
//displays all wishlist items
const Wishlist = ({ wishlist }) => {
  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      
      {/*empty message*/}
      {wishlist.length === 0 && <p>Your wishlist is empty!</p>}

        {/*render wishlist items*/}
      {wishlist.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default Wishlist;
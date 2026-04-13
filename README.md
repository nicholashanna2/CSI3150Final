**CSI 3150 Final Project Submission Template W26**  
**Name:** Nicholas Hanna  
**Project Option Chosen:** Nexus E-Commerce Suite  
**Live App URL: [https://csi-3150-final.vercel.app/](https://csi-3150-final.vercel.app)**  
**GitHub Repository URL: [https://github.com/nicholashanna2/CSI3150final](https://github.com/nicholashanna2/CSI3150final)**  
**1\. Technical Report & User Manual**   
**1.1 Project Overview (3 pts)**   
This application is an online shopping app. It showcases the capabilities of React, as well as the logic learned throughout the course.   
**1.2 Component Architecture (5 pts)**  
**Cart.jsx:** Handles all of the Cart UI, it receives cart, total, discount, setPromo and clearCart from App.jsx. Displays cart items, applies the discount with code “OAKLAND20”, calculates the final price and triggers the cart clearing.  
**FilterBar.jsx:** Provides UI controls for filtering and sorting products. It sends selected filters and sorts values back to ProductList.jsx using callback functions.  
**Modal.jsx:** Displays product details in a pop up overlay. It receives an onClose function from ProductCard.jsx. Clicking outside the modal triggers onClose.  
**Navbar.jsx:** Displays summary information such as total cart items and total price. It is completely cosmetic and does not manage state.   
**ProductCard.jsx:** Represents an individual product. It handles local UI state for the modal. It receives product data and functions like addToCart and toggleWishlist from ProductList.jsx. It is responsible for rendering the product cards and triggering actions.  
**ProductList.jsx:** Manages product display, filtering, and sorting logic. It receives the full product array from App.jsx, applies filtering and sorting locally, and renders multiple ProductCard components. It also passes necessary callback functions.  
**Wishlist.jsx:** Displays all favored products stored in local state. It receives the function wishlist from App.jsx and renders the list. It does not modify data directly but reflects updates from toggleWishlist actions.

**App.jsx:** This is the main parent component and central state manager of the entire application. It holds global state information including: products, cart, wishlist and promo. This defines the core functions such as: addToCart, toggleWishlist, clearCart.  
**Data.jsx:** Contains the static product dataset used to simulate the inventory system. Each product contains properties such as  id, name, price, category, stock, description and image. This acts as the initial data source for the entire application.   
**styles.css:** Contains the styling for the entire application. 

**1.3 Detailed Functionality (5 pts)**  
• **Feature 1 (Product Cart):** The cart system is managed in App.jsx using React state. When a user clicks “Add to Cart” in ProductCard.jsx, the product is passed up to App.jsx using a callback function. The selected product is added to the cart array, and its stock is reduced in the products state.  
• **Feature 2 (Wishlist with Persistence):** The wishlist feature allows users to save favorite products to their wishlist. It is managed globally in App.jsx using useState. On every wishlist update, useEffect saves the data “localStorage.setItem(“wishlist”, JSON.stringify(wishlist)). On initial load of the program, the app retrieves the saved data “JSON.parse(localStorage.getItem(“wishlist”)).  
the JSON response?  
• **Feature 3 (Product Filtering):** Filtering and sorting are handled in ProductList.jsx. The component maintains local state for filter and sort. When the user selects a category in FilterBar.jsx, the value is passed up to ProductList.jsx. The product array is then sorted using .filter() based on category. Sorting is applied using .sort() to arrange products by price. The UI automatically renders any filter or sort change.

**1.4 User Manual (How to Navigate) (5 pts)**  
• **Step 1:** Go to [**https://csi-3150final.vercel.app/**](https://csi-3150final.vercel.app/)  
• **Step 2:** Filter by which product you would like (The app currently only has electronics and clothing)  
• **Step 3:** After applying filters, you may add the products to cart  
• **Step 4:** After adding to cart, code “OAKLAND20” will provide a 20% discount  
• **Step 5:** You may clear the cart if necessary. Adding to the wishlist will save the product to localStorage.  
**2\. Technical Challenges & Solutions (5 pts)**  
**Challenge 1 (Modal Flickering):** One majoring issue I encountered during development was a visual glitch where after the model was open, if the mouse hovered over a different card, the screen would start flashing really quickly. Alongside that, the information about the product would flicker from the middle of the screen, to back on the card like it was supposed to, back to the middle of the screen again. It looked very visually unappealing and I could not post the website in that condition. The issue was fixed by removing the height constraints, and replacing them with min-height. I also had to use transform: scale() instead of layout shifting movement. I also had to ensure that the modal uses position:fixed with a high z-index so it is completely independent of the product grid. This eliminated the issue and the modal looks perfectly fine now.  
**Challenge 2 (Manage data between Components):** Another challenge was managing the data between multiple components, especially the cart system. Initially, I was confused on how to update the cart from nested components like ProductCard.jsx. I solved this by consolidating the most important components into App.jsx in order to reduce confusion when working between files.

**3\. Demo Video Link (5 pts)**  
**URL:** [https://youtu.be/0WqN5u4UwCc](https://youtu.be/0WqN5u4UwCc)  

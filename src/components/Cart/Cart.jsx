import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const products = localStorage.getItem('cart');

  const [cartItems, setCartItems] = useState(
    products ? JSON.parse(products) : []
  );

  console.log(cartItems);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //     const getCartItems = async () => {
  //         setLoading(true);
  //         const response = await fetch('https://fakestoreapi.com/products');
  //             setCartItems(await response.json());
  //             setLoading(false);

  //     }
  //     getCartItems();
  // }, []);

  return (
    <div className="cart-items">
      <div className="cart-items-header">
        {/* if cart is empty */}
        {cartItems.length === 0 && (
          <div className="cart-items-empty">No items are added</div>
        )}

        {/* else */}
        <div>
          {cartItems.map((product) => {
            return (
              <div key={product.id} className="cart-items-list">
                <img
                  className="cart-items-image"
                  src={product.image}
                  alt="product.title"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;

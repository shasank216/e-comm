import React, { useState,useEffect } from 'react';

const Cart = (product, handleAddProduct) => {

    const [cartItems, setCartItems] = useState([]);


    return (
        <div className='cart-items'>
            <div className="cart-items-header">

                {/* if cart is empty */}
                {cartItems.length === 0 && (<div className='cart-items-empty'>
                    No items are added
                </div>)}

                {/* else */}
                <div>
                    {cartItems.map((product) => {
                       return ( <div key={product.id} className="cart-items-list">
                            <img className='cart-items-image' src={product.image} alt="product.title" />
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default Cart

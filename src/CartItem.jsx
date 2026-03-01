// src/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ item, onContinueShopping }) => {
  const dispatch = useDispatch();

  const calculateTotalCost = () => {
    const unitCost = parseFloat(item.cost.substring(1));
    return (unitCost * item.quantity).toFixed(2);
  };

  const handleIncrement = () => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-item">
      <img className="cart-item-image" src={item.image} alt={item.name} />

      <div className="cart-item-details">
        <h2 className="cart-item-name">{item.name}</h2>
        <p className="cart-item-cost">{item.cost}</p>

        <div className="cart-item-quantity">
          <button className="cart-item-button" onClick={handleDecrement}>
            -
          </button>
          <span className="cart-item-quantity-value">{item.quantity}</span>
          <button className="cart-item-button" onClick={handleIncrement}>
            +
          </button>
        </div>

        <p className="cart-item-total">
          Subtotal: ${calculateTotalCost()}
        </p>

        <button className="cart-item-delete" onClick={handleRemove}>
          Delete
        </button>

        {/* Optional per-item continue / checkout (main ones are in ProductList) */}
        {/* 
        <div className="cart-item-actions">
          <button
            className="continue-shopping-btn"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
          <button
            className="checkout-btn"
            onClick={handleCheckoutShopping}
          >
            Checkout
          </button>
        </div>
        */}
      </div>
    </div>
  );
};

export default CartItem;

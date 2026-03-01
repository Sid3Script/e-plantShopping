// src/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ item, onContinueShopping }) => {
  const dispatch = useDispatch();

  // Subtotal for this item: quantity * unit price
  const calculateTotalCost = () => {
    const unitCost = parseFloat(item.cost.substring(1)); // remove "$"
    return (unitCost * item.quantity).toFixed(2);
  };

  // Increment quantity of this item
  const handleIncrement = () => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrement quantity (or remove if it would hit 0)
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

  // Remove this plant type completely from cart
  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  // Continue shopping: delegate to parent
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  // Checkout placeholder
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
          <button
            className="cart-item-button"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="cart-item-quantity-value">
            {item.quantity}
          </span>
          <button
            className="cart-item-button"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <p className="cart-item-total">
          Subtotal: ${calculateTotalCost()}
        </p>

        <button
          className="cart-item-delete"
          onClick={handleRemove}
        >
          Delete
        </button>

        {/* Optional: inline continue / checkout controls if your design shows them per item */}
        {/* You can keep only the page-level buttons in ProductList if you prefer */}
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

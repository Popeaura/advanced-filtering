import { useState } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import "./Cart.css";

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onConfirmOrder }) => {
  if (!isOpen) return null;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (parseFloat(item.newPrice) * item.quantity);
    }, 0).toFixed(2);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('cart-backdrop')) {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    
    const orderDetails = cartItems.map(item => 
      `${item.title} (x${item.quantity}) - $${(parseFloat(item.newPrice) * item.quantity).toFixed(2)}`
    ).join('\n');
    
    alert(`Order Confirmed!\n\n${orderDetails}\n\nTotal: $${calculateTotal()}\n\nThank you for your order!`);
    onConfirmOrder();
    onClose();
  };

  return (
    <div className="cart-backdrop" onClick={handleBackdropClick}>
      <div className="cart-container">
        {/* Cart Header */}
        <div className="cart-header">
          <h2 className="cart-title">
            <BsFillBagFill className="cart-title-icon" />
            Shopping Cart
            <span className="cart-count">({cartItems.length})</span>
          </h2>
          <button className="cart-close-btn" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>

        {/* Cart Items */}
        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <BsFillBagFill className="cart-empty-icon" />
              <p>Your cart is empty</p>
              <p className="cart-empty-subtitle">Add some products to get started!</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.title} className="cart-item-img" />
                
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <div className="cart-item-info">
                    <span className="cart-item-brand">{item.company}</span>
                    <span className="cart-item-separator">•</span>
                    <span className="cart-item-color" style={{ textTransform: 'capitalize' }}>{item.color}</span>
                  </div>
                  <div className="cart-item-price">${item.newPrice} each</div>
                </div>

                <div className="cart-item-actions">
                  <div className="cart-quantity-controls">
                    <button 
                      className="cart-quantity-btn" 
                      onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="cart-quantity-display">{item.quantity}</span>
                    <button 
                      className="cart-quantity-btn" 
                      onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="cart-item-total">
                    ${(parseFloat(item.newPrice) * item.quantity).toFixed(2)}
                  </div>
                  
                  <button 
                    className="cart-remove-btn" 
                    onClick={() => onRemoveItem(index)}
                    title="Remove item"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-section">
              <div className="cart-subtotal">
                <span>Subtotal:</span>
                <span>${calculateTotal()}</span>
              </div>
              <div className="cart-total">
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
            
            <button className="cart-confirm-btn" onClick={handleConfirm}>
              <BsFillBagFill className="cart-confirm-icon" />
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;


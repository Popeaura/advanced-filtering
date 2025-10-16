import { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./ProductModal.css";

const ProductModal = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !product) return null;

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (window.addToCart) {
      window.addToCart({
        ...product,
        quantity: quantity
      });
    }
    alert(`Added ${quantity} ${product.title} to cart!`);
    onClose();
    setQuantity(1);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
      setQuantity(1);
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <AiOutlineClose />
        </button>

        <div className="modal-body">
          {/* Product Image */}
          <div className="modal-image-section">
            <img src={product.img} alt={product.title} className="modal-product-img" />
          </div>

          {/* Product Details */}
          <div className="modal-details-section">
            <h2 className="modal-title">{product.title}</h2>
            
            {/* Rating */}
            <div className="modal-rating">
              {product.star} {product.star} {product.star} {product.star}
              <span className="modal-reviews">{product.reviews}</span>
            </div>

            {/* Price */}
            <div className="modal-price-section">
              <del className="modal-old-price">{product.prevPrice}</del>
              <span className="modal-new-price">${product.newPrice}</span>
            </div>

            {/* Product Information */}
            <div className="modal-info-grid">
              <div className="modal-info-item">
                <span className="modal-info-label">Brand:</span>
                <span className="modal-info-value">{product.company}</span>
              </div>
              <div className="modal-info-item">
                <span className="modal-info-label">Color:</span>
                <span className="modal-info-value" style={{ textTransform: 'capitalize' }}>{product.color}</span>
              </div>
              <div className="modal-info-item">
                <span className="modal-info-label">Category:</span>
                <span className="modal-info-value" style={{ textTransform: 'capitalize' }}>{product.category}</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="modal-quantity-section">
              <label className="modal-quantity-label">Quantity:</label>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="modal-total">
              <span className="modal-total-label">Total:</span>
              <span className="modal-total-price">${(parseFloat(product.newPrice) * quantity).toFixed(2)}</span>
            </div>

            {/* Add to Cart Button */}
            <button className="confirm-order-btn" onClick={handleAddToCart}>
              <BsFillBagFill className="confirm-btn-icon" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;


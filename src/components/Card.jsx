import { useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import ProductModal from "./ProductModal";

const Card = ({ img, title, star, reviews, prevPrice, newPrice, company, color, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productData = {
    img,
    title,
    star,
    reviews,
    prevPrice,
    newPrice,
    company,
    color,
    category,
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="card" onClick={handleCardClick}>
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
          
          {/* Product Info - Shows on Hover */}
          <div className="product-info">
            <div className="info-item">
              <span className="info-label">Brand:</span>
              <span className="info-value">{company}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Color:</span>
              <span className="info-value" style={{ textTransform: 'capitalize' }}>{color}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Category:</span>
              <span className="info-value" style={{ textTransform: 'capitalize' }}>{category}</span>
            </div>
          </div>
        </div>
      </section>

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        product={productData} 
      />
    </>
  );
};

export default Card;
import React from 'react'

function Card() {
  return (
    <div>
   <section className="card">
    <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
     alt="Shoe"
     className="card-img"/>
    <div className="card-details">
      <h3 className="card-title">
        <section className="card-reviews">
        <AiFillStar className="rating-star"/>
        <AiFillStar className="rating-star"/>
        <AiFillStar className="rating-star"/>
        <AiFillStar className="rating-star" />

        <span className="total-reviews">4</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>$ 300</del> 200
          </div>
          <div className="bag">
          <BsFillBagHeartFill className="bag-icon" /> 
          </div>
        </section>
      </h3>
    </div>
    </section>
    </div>
  )
}

export default  Card;
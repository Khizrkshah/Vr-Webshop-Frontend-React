import React, { useState, useEffect, useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "../css/shoppingcartstyle.css";

export function Checkout({ visibility, onClose, userIdCheckout, products }) {
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    generateOrderNumber();
  }, []);

  const generateOrderNumber = () => {
    const newOrderNumber = Math.floor(Math.random() * 1000000);
    setOrderNumber(newOrderNumber);
  };

  return (
    <div className="modal" style={{ display: visibility ? "block" : "none" }}>
      <div className="shoppingCart">
        <div className="header-cart">
          <h2>Order Details</h2>
          <button className="btn close-btn" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-products">
          <div className="order-info">
            <h4>Thank you for your order!</h4>
            <p>Order Number: {orderNumber}</p>
            <p>User ID: {userIdCheckout}</p>
            {products.map((product) => (
              <div className="cart-product" key={product.id}>
                <img src={product.imageSrc} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <span className="product-price">
                    HUF {product.price * product.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

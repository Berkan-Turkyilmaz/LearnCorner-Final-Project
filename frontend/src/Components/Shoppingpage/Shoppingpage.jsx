import React, { useContext, useEffect, useState } from "react";
import "./Shoppingpage.css";
import { AuthContext } from "../AuthProvider";
import { FaPlusSquare } from "react-icons/fa";
import { AiFillMinusSquare } from "react-icons/ai";
import { IoIosBasket } from "react-icons/io";

export default function Shoppingpage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const { basket, setBasket } = useContext(AuthContext);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:5555/API/products`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = basket.reduce(
        (sum, item) => sum + item.price * (item.amount || 1),
        0
      );
      setTotalPrice(total);
      localStorage.setItem("basket", JSON.stringify(basket));
    };

    calculateTotalPrice();
  }, [basket]);

  const amountIncreaseHandler = (productId) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === productId
          ? { ...item, amount: (item.amount || 1) + 1 }
          : item
      )
    );
  };

  const amountDecreaseHandler = (productId) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === productId
          ? { ...item, amount: Math.max(1, (item.amount || 1) - 1) }
          : item
      )
    );
  };



  const cleanTheBasket = () => {
    setBasket([]);
  }

  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, [setBasket]);

  const addToBasket = (product) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  return (
    <div className="general-container">
      <div className="left-panel">
        {products.map((product) => (
          <div key={product.id} className="product-cont">
            <div className="product-photo-cont">
              <img
                className="product-image"
                src={product.image}
                alt="productimage"
              />
            </div>
            <div className="desc-cont">
              <div className="product-description">{product.definition}</div>
              <div className="product-level">{product.level}</div>
              <div className="price-and-level">
                <div className="level-category">{product.category}</div>
                <div className="product-price">{product.price}$</div>
              </div>
              <div className="add-to-basket-cont">
                <button
                  onClick={() => addToBasket(product)}
                  className="add-to-basket-button"
                >
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="right-panel">
        <div className="basket-header-cont">
          <h3 className="basket-header">
            My Basket <IoIosBasket size={25} />
          </h3>
        </div>
        <div className="basket-text">
          <span>You have {basket.length} items in your basket.</span>
        </div>
        <div className="clean-button-cont">
          <button onClick={() => cleanTheBasket()} className="clean-button">Clean Your Basket</button>
        </div>
        <div className="mapped-items-in-basket">
          {basket.map((product) => (
            <div key={product.id} className="item-in-basket">
              <img
                className="item-image-in-basket"
                src={product.image}
                alt=""
              />
              <div className="features-cont">
                <div className="item-description">{product.definition}</div>
                <div className="item-price">Price: {product.price}$</div>
                <div className="item-quantity">
                  Quantity:
                  <span> {product.amount}</span>
                  <div className="icons-quantity">
                    <FaPlusSquare
                      onClick={() => amountIncreaseHandler(product.id)}
                    />
                    <AiFillMinusSquare
                      onClick={() => amountDecreaseHandler(product.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price">Total Price: {totalPrice}$</div>
      </div>
    </div>
  );
}
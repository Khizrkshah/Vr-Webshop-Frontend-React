import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import "../css/homepagestyle.css";
import { Link } from "react-router-dom";
import { Cart } from "../components/Cart";
import { GiShoppingBag } from "react-icons/gi";

export function Home() {
  const [products, setProducts] = useState();
  const [cartVisibility, setCartVisibility] = useState(false);
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProductsInCart([...productsInCart, newProduct]);
  };

  useEffect(() => {
    fetch("http://192.168.0.128:8081/api/product")
      .then((res) => res.json())
      .then((jsonRes) => {
        setProducts(jsonRes);
      });
  }, []);

  const onQuantityChange = (productId, count) => {
    setProductsInCart((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -2) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProductsInCart((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  return (
    <div className="App">
      <Cart
        visibility={cartVisibility}
        products={productsInCart}
        onClose={() => setCartVisibility(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      <header className="header">
        <div className="constraint">
          <h1>
            <a href="/home">
              <span>Kai's VR Store</span>
              <img src={"/images/icon.png"} alt="icon.png" />
            </a>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a onClick={() => setCartVisibility(true)}>
                  <GiShoppingBag size={24} />
                  {productsInCart.length > 0 && (
                    <span className="product-count">
                      {productsInCart.length}
                    </span>
                  )}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <hr />
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            props={product}
            isLastItem={product.id == products.length}
            addProductToCart={addProductToCart}
          />
        ))}
      <hr />
      <footer className="footer">
        <div className="constraint">Mian Khizr Shah &copy; 2023</div>
      </footer>
    </div>
  );
}

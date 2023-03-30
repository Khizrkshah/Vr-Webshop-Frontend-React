import { useEffect, useState, useContext } from "react";
import { Product } from "../components/Product";
import "../css/homepagestyle.css";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "../components/Cart";
import { GiShoppingBag } from "react-icons/gi";
import { UserContext } from "../App";
import { Checkout } from "./CheckOut";

export function Home() {
  const [products, setProducts] = useState();
  const [cartVisibility, setCartVisibility] = useState(false);
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  const navigate = useNavigate();
  const userStore = useContext(UserContext);
  const [userIdCheckout, setUserIdCheckout] = useState(
    localStorage.getItem("userId") || null
  );

  const [checkoutVisibility, setCheckoutVisibility] = useState(false);

  useEffect(() => {
    if (userIdCheckout === null && userStore.userId !== null) {
      setUserIdCheckout(userStore.userId);
      localStorage.setItem("userId", userStore.userId);
    }
  }, [userIdCheckout, userStore.userId]);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const addProductToCart = (product) => {
    const productExists = productsInCart.some(
      (existingProduct) => existingProduct.id === product.id
    );

    if (!productExists) {
      const newProduct = {
        ...product,
        count: 1,
      };
      setProductsInCart([...productsInCart, newProduct]);
    }
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

  const onCheckoutClicked = () => {
    setCartVisibility(false);
    if (productsInCart.length > 0) {
      const firstProduct = productsInCart[0];
      const purchaseData = {
        productId: firstProduct.id,
        userId: userIdCheckout,
        count: firstProduct.count,
      };
      purchaseItems(purchaseData);
      setCheckoutVisibility(true);
    } else {
      console.log(
        "cannot deal with multiple product ids and counts need to change the datatype to send into database to handle multiple products"
      );
      const firstProduct = productsInCart[0];
      const purchaseData = {
        productId: firstProduct.id,
        count: firstProduct.count,
        userId: userIdCheckout,
      };

      purchaseItems(purchaseData);
      setCheckoutVisibility(true);
    }
  };

  function purchaseItems(purchaseData) {
    fetch("http://192.168.0.128:8081/api/product/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchaseData),
    })
      .then((response) => response.json())
      .then((purchaseData) => {
        console.log(purchaseData);
      });
  }

  return (
    <div>
      <Cart
        visibility={cartVisibility}
        products={productsInCart}
        onClose={() => setCartVisibility(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
        onCheckoutClicked={onCheckoutClicked}
      />
      <Checkout
        visibility={checkoutVisibility}
        onClose={() => setCheckoutVisibility(false)}
        userIdCheckout={userIdCheckout}
        products={productsInCart}
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
              <li>
                <a
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("shopping-cart");
                    localStorage.removeItem("userId");
                    navigate("/");
                  }}
                >
                  Logout
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
    </div>
  );
}

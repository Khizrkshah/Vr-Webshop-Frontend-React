import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import "../css/homepagestyle.css";
import { Link } from "react-router-dom";

export function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:8081/api/product")
      .then((res) => res.json())
      .then((jsonRes) => {
        setProducts(jsonRes);
      });
  }, []);

  return (
    <div className="App">
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
                <a href="/">Cart</a>
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
          />
        ))}
      <hr />
      <footer className="footer">
        <div className="constraint">Mian Khizr Shah &copy; 2023</div>
      </footer>
    </div>
  );
}

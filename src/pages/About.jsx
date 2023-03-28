import { Link } from "react-router-dom";
import "../css/homepagestyle.css";

export function About() {
  return (
    <div>
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
      <section className="constraint">
        <article className="content">
          <h1>About, Kai's VR Store!</h1>
          <p>
            Welcome to Kai's VR webshop, where we offer a wide range of products
            from TVs and monitors to furniture and accessories, all available to
            purchase through our innovative VR platform. With our cutting-edge
            technology, you can browse and buy products as if you were in a
            physical store, without ever having to leave the comfort of your own
            home.
          </p>
          <p>
            Our team of expert developers and designers have created a unique
            shopping experience that combines the convenience of online shopping
            with the immersive experience of shopping in a physical store. Our
            VR platform allows you to visualize how our products will look in
            your space, so you can make informed decisions about your purchases.
          </p>
          <p>
            At our webshop, we offer a vast selection of high-quality products
            from top brands, all of which are carefully curated to ensure that
            we provide our customers with the best possible selection. From the
            latest TVs and monitors to stylish furniture and accessories, we
            have something for everyone.
          </p>
          <p>
            We are committed to providing exceptional customer service and
            support throughout your shopping experience, from browsing our
            website to receiving your order. Our team is always available to
            answer any questions you may have about our products or the VR
            shopping experience.
          </p>
          <p>
            Thank you for choosing our VR webshop for your shopping needs. We're
            excited to bring you a new way of shopping that combines the best of
            both worlds: convenience and immersion.
          </p>
          <a href="/home" className="button button-white">
            Go Back Home.
          </a>
        </article>
      </section>
      <hr />
      <footer className="footer">
        <div className="constraint">Mian Khizr Shah &copy; 2023</div>
      </footer>
    </div>
  );
}

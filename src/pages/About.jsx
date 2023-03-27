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
            Welcome to Kai's VR Store! this store was developed as a passion
            project of mine
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            qui rerum impedit nesciunt. Enim fuga, voluptate dolore beatae et,
            id ab corrupti quis cupiditate cum doloribus dolor totam aut
            ratione.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            qui rerum impedit nesciunt. Enim fuga, voluptate dolore beatae et,
            id ab corrupti quis cupiditate cum doloribus dolor totam aut
            ratione.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            qui rerum impedit nesciunt. Enim fuga, voluptate dolore beatae et,
            id ab corrupti quis cupiditate cum doloribus dolor totam aut
            ratione.
          </p>
          <a href="/" className="button button-white">
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

export function Product({ props, addProductToCart }) {
  return (
    <section className="constraint">
      <article
        className={props.id % 2 == 0 ? "product product-reverse" : "product"}
      >
        <div className="product-text">
          <h1>{props.name}</h1>
          <h2>HUF {props.price}</h2>
          <p>{props.description}</p>
          <nav className="product-nav">
            <ul>
              <li>
                <a
                  className={
                    props.id % 2 == 0
                      ? "button button-orange"
                      : "button button-white"
                  }
                  onClick={() => addProductToCart(props)}
                >
                  Buy
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="product-img">
          <img src={props.imageSrc} width="300" />
        </div>
      </article>
      {!props.isLastItem && <hr />}
    </section>
  );
}

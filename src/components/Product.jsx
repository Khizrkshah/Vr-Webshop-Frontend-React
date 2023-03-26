export function Product(props) {
  return (
    <section className="constraint">
      <article
        className={
          props.props.id % 2 == 0 ? "product product-reverse" : "product"
        }
      >
        <div className="product-text">
          <h1>{props.props.name}</h1>
          <h2>{props.props.price}</h2>
          <p>{props.props.description}</p>
          <nav className="product-nav">
            <ul>
              <li>
                <a href="#" className="button button-orange">
                  Buy
                </a>
              </li>
              <li>
                <a href="#" className="button button-white">
                  Learn More &gt;
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="product-img">
          <img src={props.props.imageSrc} width="300" />
        </div>
      </article>
      {!props.isLastItem && <hr />}
    </section>
  );
}

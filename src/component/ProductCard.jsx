function ProductCard(props) {
  function handleClick() {
    props.onAddToCart(props.product.id);
    alert("added");
  }
  return (
    <div className="product-card">
      <img src="https://via.placeholder.com/150" />
      <div className="product-content">
        <h4>{props.product.title}</h4>
        <p>{props.product.price}</p>
        <button onClick={handleClick} className="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

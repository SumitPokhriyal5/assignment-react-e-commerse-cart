
const ProductCard = ({name, price, quantity}) => {
  return (
    <div data-testid="product-card">
      <h3 data-testid="name">{name}</h3>
      <h5 data-testid="price">{price}</h5>
      <p data-testid="quantity">{quantity}</p>
      <button data-testid="add-btn">{quantity > 0 ? "Add to cart" : "Out of Stock"}</button>
    </div>
  );
};

export default ProductCard;

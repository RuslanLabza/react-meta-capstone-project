export default function SpecialItem({ name, image, price, description }) {
  return (
    <div className="special-item" key={name}>
      <div className="special-item-image-container">
        <img src={image} alt={name} />
      </div>
      <div className="special-item-description">
        <div className="special-header-container">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
        <p>{description}</p>
        <button>Order a delivery</button>
      </div>
    </div>
  );
}

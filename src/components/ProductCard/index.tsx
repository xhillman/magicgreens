import './productCard.css'

interface ProductCardProps {
  name: string;
  price: number;
}

function ProductCard(props: ProductCardProps) {

  const {name, price} = props;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="product-card">
      <img src=""></img>
      <h3>{name}</h3>
      <p>{formatter.format(price)}</p>
    </div>
  )
}

export default ProductCard;
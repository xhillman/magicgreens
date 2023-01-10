import './productCard.css'

interface ProductCardProps {
  name: string;
  price: number;
}

function ProductCard(props: ProductCardProps) {

  const { name, price } = props;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="product-card">
      <img src=""></img>
      <div className='product-info'>
        <h3>{name}</h3>
        <p>{formatter.format(price)}</p>
        <button className='add-to-cart-button'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard;
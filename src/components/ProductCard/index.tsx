import './productCard.css'
import basil from '../../assets/basil.png'
// import butterhead from '../../assets/butterhead.png'

interface ProductCardProps {
  name: string;
  price: number;
  image?: string;
}

function ProductCard(props: ProductCardProps) {

  const { name, price, image } = props;

  console.log('image', typeof image, image)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="product-card">
      <img className='product-photo' src={basil}></img>
      <div className='product-info'>
        <h3>{name}</h3>
        <p>{formatter.format(price)}</p>
        <button className='add-to-cart-button'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard;
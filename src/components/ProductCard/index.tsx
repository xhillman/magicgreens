import './productCard.css'
import basil from '../../assets/basil.png'
// import butterhead from '../../assets/butterhead.png'

import { addToCart } from '../../Store/slices/cartSlice';
import { useAppDispatch } from '../../Store/hooks';
import {ICartItem} from '../../Store/slices/cartSlice'

interface ProductCardProps {
  name: string;
  price: number;
  image?: string;
}

function ProductCard(props: ProductCardProps) {

  const { name, price, image } = props;

  const dispatch = useAppDispatch();

  let item: ICartItem = {
    name: name,
    price: price,
    quantity: 1,
    image
  }

  function handleClick() {
    dispatch(addToCart(item))
  }

  // console.log('image', typeof image, image)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="product-card">
      <img className='product-photo' src={image} height='200px'></img>
      <div className='product-info'>
        <h3>{name}</h3>
        <p>{formatter.format(price)}</p>
        <button 
          className='add-to-cart-button'
          onClick={handleClick} >Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard;
import Header from "../Header";
import {useAppSelector} from '../../Store/hooks';
import { Product } from "../../Store/slices/productsSlice";
import ProductCard from "../ProductCard";

import './products.css'

function Products() {

  const products = useAppSelector((state) => state.product);
  console.log(products)

  return (
    <div className="product-section">
      <Header />
      <h1>Products</h1>
      <div className="products">

      {
        products.products.map((product: Product) => {
          return (
            <ProductCard name={product.name} price={product.price} />
            // <div className="product-card" key={product.name}>
            //   <h3>{product.name}</h3>
            //   <p>{product.price}</p>
            // </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Products;
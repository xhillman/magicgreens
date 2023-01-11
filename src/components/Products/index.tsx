import Header from "../Header";
import { useAppSelector } from '../../Store/hooks';
import { Product } from "../../Store/slices/productsSlice";
import ProductCard from "../ProductCard";

import './products.css'

function Products() {

  const products = useAppSelector((state) => state.product);

  return (
    <>
      <Header />
      <div className="product-section">
        <h1>The Goods</h1>
        <div className="product-container">
          <div className="products">
            {
              products.products.map((product: Product) => {
                return (
                  <ProductCard name={product.name} price={product.price} image={product.image}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;
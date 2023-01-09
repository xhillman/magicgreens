import Header from "../Header";
import {useAppSelector} from '../../Store/hooks';
import { Product } from "../../Store/slices/productsSlice";

function Products() {

  const products = useAppSelector((state) => state.product);
  console.log(products)

  return (
    <>
      <Header />
      <h1>Products</h1>
      {
        products.products.map((product: Product) => {
          return (
            <div className="product-card" key={product.name}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default Products;
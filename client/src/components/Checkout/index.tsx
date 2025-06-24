import Header from "../Header";
import { ICartItem } from "../../Store/slices/cartSlice";
import './checkout.css'


function Checkout() {

  let cartItemsObject = localStorage.getItem('cart');
  if (typeof cartItemsObject !== 'string') {
    cartItemsObject = '[]';
  }
  let cartItems: ICartItem[] = JSON.parse(cartItemsObject);

  const numItems: number = cartItems.reduce((total: number, item: ICartItem) => {
    return total + +item.quantity;
  }, 0);
  const orderTotal: number = cartItems.reduce((total: number, item: ICartItem) => {
    return total + (item.price * item.quantity);
  }, 0);

  const shipping: number = +(orderTotal * .09).toFixed(2);

  const grandTotal: number = +orderTotal + +shipping;

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const popup = document.querySelector('.popup') as HTMLDivElement;
    popup.classList.add('show-popup');
  }

  return (
    <>
      <Header />
      <div className="checkout">
        <form className="checkout-form" onSubmit={submit}>
          <div className="customer-info">
            <h2>Shipping</h2>
            <div className="checkout-form-row">
              <input type="text" id="first-name" placeholder="First Name*" required />
              <input type="text" id="last-name" placeholder="Last Name*" />
            </div>
            <div className="checkout-form-row">
              <input type="text" id="address" placeholder="Address Line 1*" />
              <input type="text" id="address2" placeholder="Address Line 2" />
            </div>
            <div className="checkout-form-row">
              <input type="text" id='country' value="United States" />
              <input type="text" id="city" placeholder="City*" />
            </div>
            <div className="checkout-form-row">
              <select id='state' name="state">
                <option value="">State*</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <input type="text" id="zip" placeholder="Zip Code*" />
            </div>
            <div className="checkout-form-row">
              <input type="text" id="email" placeholder="Email*" />
            </div>
            <h2>Billing</h2>
            {/* <p>Accepted Cards</p>
            <img src="placeholder " alt="" /> */}
            <div className="checkout-form-row">
              <input type="text" id="name" placeholder="Name on Card*" />
              <input type="text" id="card-number" placeholder="Card Number*" />
            </div>
            <div className="checkout-form-row">
              <input type="text" id="exp-date" placeholder="Exp Date*" />
              <input type="text" id="cvv" placeholder="CVV*" />
            </div>
          </div>
          <div className="order-info">
            <div className="summary-heading">
              <h2>Order Summary</h2>
              <p>#{Math.floor(Math.random() * 10000000000)}</p>
            </div>
            <div className="order-summary">
              <p>{numItems} Items</p>
              {
                cartItems.map((item: ICartItem) => {
                  return (
                    <p key={item.name}>
                      {item.name} x {item.quantity} - ${(item.price * +item.quantity).toFixed(2)}
                    </p>
                  )
                })
              }
              <div className="totals">
                <p>Subtotal: ${orderTotal.toFixed(2)}</p>
                <p>Shipping: ${shipping}</p>
                <p>Total: ${grandTotal}</p>
              </div>
              <button className="order-btn" type="submit">Place Order</button>
            </div>
            <div id="popup" className="popup">
              <p>
                We're sorry! It looks like we're sold out of the items you selected. Please check back later.
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Checkout;
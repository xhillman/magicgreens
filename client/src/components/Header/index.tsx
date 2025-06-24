import Cart from '../Cart';
import {useState} from 'react';

import './header.css';

// import logo from '../../assets/logo.png'
// import logo from assets folder
import logo from '../../../public/assets/logo.png'

function Header() {

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className='header'>
        <a href="/"><img className='logo' src={logo}/></a>
        <nav>
          <ul className='navbar'>
            <li className='nav-item'><a href="/thegoods">The Goods</a></li>
            <li className='nav-item'><a href="/thestory">The Story</a></li>
            <li className='nav-item'><a href="/thesystems">The Systems</a></li>
          </ul>
        </nav>
        <button className='cart-button' onClick={() => setCartOpen(!cartOpen)}>Cart</button>
        {
          cartOpen ? <Cart setCartOpen={setCartOpen}/> : null
        }
      </header>
    </>
  )
}

export default Header;
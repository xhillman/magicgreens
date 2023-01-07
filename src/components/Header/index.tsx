import './header.css';

import logo from '../../assets/logo.png'

function Header() {
  return (
    <>
      <header className='header'>
        <img className='logo' src={logo}/>
        <nav>
          <ul className='navbar'>
            <li className='nav-item'><a href="/">Home</a></li>
            <li className='nav-item'><a href="/thestory">The Story</a></li>
            <li className='nav-item'><a href="/thesystems">The Systems</a></li>
            <li className='nav-item'><a href="/thegoods">The Goods</a></li>
          </ul>
        </nav>
        <button className='cart-button'>Cart</button>
      </header>
    </>
  )
}

export default Header;
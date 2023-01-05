import './header.css';

// q: how do i remove an underline from a tag
// a: add text-decoration: none to the a tag


function Header() {
  return (
    <>
      <header className='header'>
        <h4 className='logo'>Magic<span>Greens</span></h4>
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
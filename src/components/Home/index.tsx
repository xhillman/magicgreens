import Header from "../Header";

import heroLeaf from '../../assets/hero-leaf.jpg';
import fresh from '../../assets/fresh.jpg';
import './home.css';

function Home() {
  return (
    <>
      <Header />
      <div className='hero-section'>
        <div className="headings">
          <h2 className="hero-heading">MagicGreens</h2>
          <p className="hero-subheading">Fast - Fresh - Thoughtful</p>
          {/* <p className="hero-subheading">Farming of the future.</p> */}
        </div>
        <button className="shop-now-button">Shop Now</button>
      </div>
      <div className='value-section'>
        <img className='value-image' src={fresh} />
        <div className="hero-content-container">
          <p className="value-paragraph">Fast Paragraph</p>
        </div>
      </div>
      <div className='value-section'>
        <div className="hero-content-container">
          <p className="value-paragraph">Fresh Paragraph</p>
        </div>
        <img className='value-image' src={fresh} />
      </div>
      <div className='value-section'>
        <img className='value-image' src={fresh} />
        <div className="hero-content-container">
          <p className="value-paragraph">Thoughtful Paragraph</p>
        </div>
      </div>
    </>
  )
}

export default Home;
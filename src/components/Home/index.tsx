import Header from "../Header";

import heroLeaf from '../../../public/assets/hero-leaf.jpg';
import fresh from '../../../public/assets/fresh-image1.png';
import fast from '../../../public/assets/fast-image.png';
import './home.css';

function Home() {
  return (
    <>
    <Header />
    <div className='home-container'>
      <div className='hero-section'>
        <div className="hero-container">
          <div className="headings">
            <h2 className="hero-heading">MagicGreens</h2>
            <p className="hero-subheading">Fast - Fresh - Thoughtful</p>
          </div>
          <a href='thegoods'><button className="shop-now-button">Shop Now</button></a>
        </div>
      </div>
      <div className='feature-section'>
      <div className='value-section'>
        <img className='value-image' src={fast} />
        <div className="hero-content-container">
          <p className="value-paragraph">We're a part of your community, so foods get to your plate faster.</p>
        </div>
      </div>
      <div className='value-section'>
        <div className="hero-content-container">
          <p className="value-paragraph">Controlled growing environments mean fresh food all year long.</p>
        </div>
        <img className='value-image' src={fresh} />
      </div>
      <div className='value-section'>
        <img className='value-image' src={fresh} />
        <div className="hero-content-container">
          <p className="value-paragraph">Thoughtful Paragraph</p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home;
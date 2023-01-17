import Header from "../Header";

import fresh from '../../../public/assets/fresh-image.mp4';
import fast from '../../../public/assets/delivery-image.png';
import thoughtful from '../../../public/assets/thoughtful-image.png';
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
              <p className="value-paragraph">We're a part of your community, so food get to your plate faster.</p>
            </div>
          </div>
          <div className='value-section'>
            <div className="hero-content-container">
              <p className="value-paragraph">Controlled growing environments mean fresh food all year long.</p>
            </div>
            <video className='value-video' autoPlay loop muted>
              <source src={fresh} type="video/mp4" />
            </video>
            {/* <img className='value-image' src={fresh} /> */}
          </div>
          <div className='value-section'>
            <img className='value-image' src={thoughtful} />
            <div className="hero-content-container">
              <p className="value-paragraph">97% less water<br/>11x more yield/acre<br/>ZERO pesticides </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
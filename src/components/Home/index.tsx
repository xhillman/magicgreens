import Header from "../Header";

//placeholder image url
import heroLeaf from '../../assets/hero-leaf.jpg';
import './home.css';

function Home() {
  return (
    <>
      <Header />
      <div className='hero-section'>
        <h2>Overlay text will go here.</h2>
        <button>Shop Now</button>
      </div>
      <h3 className='tagline'>Fast - Fresh - Thoughtful</h3>
      <div className='value-section'>
        <img className='value-image' src="https://via.placeholder.com/300x200" />
        <p className="value-paragraph">Fast Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem</p>
      </div>
      <div className='value-section'>
        <p className="value-paragraph">Fresh Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem</p>
        <img className='value-image' src="https://via.placeholder.com/300x200" />
      </div>
      <div className='value-section'>
        <img className='value-image' src="https://via.placeholder.com/300x200" />
        <p className="value-paragraph">Thoughtful Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem</p>
      </div>
    </>
  )
}

export default Home;
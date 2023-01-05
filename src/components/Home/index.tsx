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
      <h3 className='tagline'>Fast, Fresh, Thoughtful</h3>
      <img className='hero-image' src="https://via.placeholder.com/300x200" />
      <p>Fast Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem dolorem atque sint, expedita modi et, error suscipit. Soluta id delectus dolorem laudantium illum veniam.</p>
      <img src="https://via.placeholder.com/300x200" />
      <p>Fresh Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem dolorem atque sint, expedita modi et, error suscipit. Soluta id delectus dolorem laudantium illum veniam.</p>
      <img src="https://via.placeholder.com/300x200" />
      <p>Thoughtful Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem dolorem atque sint, expedita modi et, error suscipit. Soluta id delectus dolorem laudantium illum veniam.</p>
    </>
  )
}

export default Home;
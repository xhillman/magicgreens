import Header from "../Header";

import hydroponics from '../../../public/assets/hydroponics.jpg';
import vertical from '../../../public/assets/vertical.jpg';
import solar from '../../../public/assets/solar.jpg';

import './systems.css';

function Systems() {
  return (
    <>
      <Header />
      <div className="systems-container">
        <h1>The Systems</h1>
        <div className="systems-item">
          <img className="systems-img" src={hydroponics} />
          <p className="systems-paragraph">Hydroponics Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem dolorem atque sint, expedita modi et, error suscipit. Soluta id delectus dolorem laudantium illum veniam.</p>
        </div>
        <div className="systems-item">
          <p className="systems-paragraph">Vetical Farming Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem dolorem atque sint, expedita modi et, error suscipit. Soluta id delectus dolorem laudantium illum veniam.</p>
          <img className="systems-img" src={vertical} />
        </div>
        <div className="systems-item">
          <img className="systems-img" src={solar} />
          <p  className="systems-paragraph">Solar Powered Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem dolorem atque sint, expedita modi et, error suscipit. Soluta id delectus dolorem laudantium illum veniam.</p>
        </div>
      </div>
    </>
  )
}

export default Systems;
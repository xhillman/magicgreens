import Header from "../Header";
import Footer from "../Footer";
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
          <p className="systems-paragraph">Hydroponic farming is a modern way to grow plants using nutrient-rich water. Benefits include higher yields, improved plant quality, and reduced water usage. Plus, hydroponic systems don't require soil and have fewer pests, reducing the need for pesticides, giving you peace of mind about the food you're growing.</p>
        </div>
        <div className="systems-item">
          <p className="systems-paragraph">Vertical farming is an innovative way to grow crops in a limited space. It offers several benefits, such as increased yields, year-round production, lower water usage, and reduced use of pesticides. Vertical farming also creates a controlled environment for plants, leading to improved quality and consistency.</p>
          <img className="systems-img" src={vertical} />
        </div>
        <div className="systems-item">
          <img className="systems-img" src={solar} />
          <p  className="systems-paragraph">Solar power offers a sustainable solution for energy needs. Some advantages include reduced energy costs, reduced carbon footprint, and power for irrigation systems and climate controls. Additionally, solar power can be stored for use during non-sunny periods, providing a reliable source of energy. Investing in solar power not only saved us money, but also supports our environmentally friendly farming practices.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Systems;
import Header from "../Header";
import './about.css';

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1>Our Story</h1>
        <div className="about-timeline">
          <div className='timeline'></div>
          <div className="timepoint-left">
            <h2>2017</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
          <div className="timepoint-right">
            <h2>2018</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
          <div className="timepoint-left">
            <h2>2019</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
          <div className="timepoint-right">
            <h2>2020</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
          <div className="timepoint-left">
            <h2>2021</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
          <div className="timepoint-right">
            <h2>2022</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
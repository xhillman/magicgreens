import Header from "../Header";
import { useRef, useEffect } from 'react';
import idea from '../../../public/assets/idea.svg';
import greenhouse from '../../../public/assets/greenhouse.svg';
import harvest from '../../../public/assets/harvest.svg';
import solar from '../../../public/assets/solar-install.svg';
import vertical from '../../../public/assets/vertical.svg';
import greenhouse2 from '../../../public/assets/greenhouse2.svg';
import './about.css';

function About() {

  const leftRef = useRef<HTMLDivElement[]>([]);
  const rightRef = useRef<HTMLDivElement[]>([]);
  const pushLeftRef = (el: HTMLDivElement) => leftRef.current.push(el);
  const pushRightRef = (el: HTMLDivElement) => rightRef.current.push(el);

  useEffect(() => {

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: .15
    }

    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-left');
          console.log(entries);
        } else {
          entry.target.classList.remove('show-left');
        }
      })
    }, options);

    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-right');
        } else {
          entry.target.classList.remove('show-right');
        }
      })
    }, options);

    leftRef.current.forEach(el => leftObserver.observe(el));
    rightRef.current.forEach(el => rightObserver.observe(el));

  }, [])

  return (
    <>
      <Header />
      <div className="about-container">
        <h1>Our Story</h1>
        <div className="about-timeline">
          <div className='timeline'></div>
          <div ref={pushLeftRef} className='hidden-left'>
            <div className="timeline-heading">
              <embed className="timeline-img" src={idea} />
              <h2>2017</h2>
            </div>
            <p>MagicGreens is born! <br />After coming to the realization that modern food production wouldn't be able to keep up with the world's growing population, we set out to find a sustaiable solution.</p>
          </div>
          <div ref={pushRightRef} className='hidden-right'>
            <div className="timeline-heading">
              <h2>2018</h2>
              <embed className="timeline-img" src={greenhouse} />
            </div>
            <p>Our first greenhouse finishes construction! Let's grow some greens!</p>
          </div>
          <div ref={pushLeftRef} className='hidden-left'>
            <div className="timeline-heading">
              <embed className="timeline-img" src={harvest} />
              <h2>2019</h2>
            </div>
            <p>The very first harvest of lettuce and basil starts going out to customers!</p>
          </div>
          <div ref={pushRightRef} className='hidden-right'>
            <div className="timeline-heading">
              <h2>2020</h2>
              <embed className="timeline-img" src={solar} />
            </div>
            <p>Greenhouse #1 is fitted with solar panels and a water recycler to reduce our energy usage and increase water efficiency.</p>
          </div>
          <div ref={pushLeftRef} className='hidden-left'>
            <div className="timeline-heading">
              <embed className="timeline-img" src={vertical} />
              <h2>2021</h2>
            </div>
            <p>We did some experimenting and came up with a unique system to increase our variety of products.</p>
          </div>
          <div ref={pushRightRef} className='hidden-right'>
            <div className="timeline-heading">
              <h2>2022</h2>
              <embed className="timeline-img" src={greenhouse2} />
            </div>
            <p>Greenhouse #2 starts construction so we can reach even more communities!</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
import Header from "../Header";
import {useRef, useEffect} from 'react';
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
      threshold: .75
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
          // console.log(entries);
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
            <h2>2017</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
          <div ref={pushRightRef} className='hidden-right'>
            <h2>2018</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
          <div ref={pushLeftRef} className='hidden-left'>
            <h2>2019</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
          <div ref={pushRightRef} className='hidden-right'>
            <h2>2020</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
          <div ref={pushLeftRef} className='hidden-left'>
            <h2>2021</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
          <div ref={pushRightRef} className='hidden-right'>
            <h2>2022</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minus commodi.</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
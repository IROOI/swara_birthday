// src/Home.js
import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import '../App.css';
import Card from './Card';

function Page1() {
  const navigate = useNavigate();

  const handleButtonClick=()=>{
    navigate('/pass2')
  }

  const animateScroll = () => {
    // Request animation frame for smoother performance
    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let animationFrameId;

    function checkInView() {
      const windowHeight = window.innerHeight;

      sections.forEach((section, index) => {
        const boundingBox = section.getBoundingClientRect();

        if (boundingBox.top < windowHeight * 0.75 && boundingBox.bottom > 0) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', () => {
      checkInView();
      // Call the animateScroll function on scroll
      animateScroll();
    });
    window.addEventListener('resize', checkInView);

    // Initial check
    checkInView();

    // Cleanup listeners on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId); // Cancel animation frame on unmount
      window.removeEventListener('scroll', checkInView);
      window.removeEventListener('resize', checkInView);
    };
  }, [animateScroll]);

  return (
    <div>
      <section
        className="section"
        id="section1"
      >
        <div className="content">
          <Card />
        </div>
      </section>   
      <section
        className="section"
        id="section5"
      >
        <div className="content">
          <p>Picture's of the most boring person on earth. <br />⬇️</p>
          <img
            src="/images/3.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section6"
      >
        <div className="content">
          <img
            src="/images/22.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section7"
      >
        <div className="content">
          <p>Cinderella 🩵</p>
          <img
            src="/images/29.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section8"
      >
        <div className="content">
          <img
            src="/images/31.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section3"
      >
        <div className="content">
          <p>Queen's Walk 👸</p>
          <img
            src="/images/41.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section4"
      >
        <div className="content">
          <img
            src="/images/10.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section9"
      >
        <div className="content">
          <p>masterpiece shot by the best photographer 📷</p>
          <img
            src="/images/9.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section2"
      >
        <div className="content">
          <p>so pwettyy 🦋</p>
          <img
            src="/images/4.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section3"
      >
        <div className="content">
          <img
            src="/images/5.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section3"
      >
        <div className="content">
          <img
            src="/images/34.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section10"
      >
        <div className="content">
          <p>Keep Slayin' Queen 👑</p>
          <img
            src="/images/11.jpg"
            className="img1"
            alt="Interactive Image"
          />
          <button type="button" className='bottom-right-button' onClick={handleButtonClick}></button>
        </div>
      </section>
    </div>
  );
}

export default Page1;

import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';

function Page4() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/pass5')
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
          <p>बाळ्या तू शिकून खूप खूप मोठी हो .</p>
          <img
            src="/images/13.jpg"
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
          <p>बाळ्या तुझी पुस्तक घरी आठवण काढतात.</p>
          <img
            src="/images/35.jpg"
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
          <p>बाळा तू किती गोड आहेस तू गेल्याासून खूप आठवण येते.</p>
          <img
            src="/images/39.jpg"
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
          <p>बाळ्या तू सदा सुखी समाधानी राहुल उंच शिखरावर जावे ही माझी ईश्वरचरणी प्रार्थना आहे तुझ्या वाढदिवस माझ्या खूप खूप शुभेच्छा</p>
          <img
            src="/images/30.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
        <button type="button" className='bottom-right-button' onClick={handleButtonClick}></button>
      </section>
    </div>
  );
}

export default Page4;

import { useNavigate } from 'react-router-dom'
import React,{ useEffect } from 'react';

function Page2() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/pass3');
  };

  const animateScroll = () => {
    // Request animation frame for smoother performance
    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let animationFrameId;

    function checkInView() {
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
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
          <p>Thank you for looking after me since then ❤️ </p>
          <img
            src="/images/8.jpg"
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
          <p>umm <span style={{ fontSize: 'larger' }}>🙂☹️</span></p>
          <img
            src="/images/14.jpg"
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
          <p>hmm this is better. keep smiling 😁😁</p>
          <img
            src="/images/18.jpg"
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
          <p>but I'm more cool 😎</p>
          <img
            src="/images/19.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section5"
      >
        <div className="content">
          <p>oooo oooo cry babyyy😂</p>
          <img
            src="/images/15.jpg"
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
          <p>the most innocent person in the world and you 😇</p>
          <img
            src="/images/17.jpg"
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
          <p>maybe we should take classes where they teach 😁</p>
          <img
            src="/images/16.jpg"
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
          <p>Last Diwali for a while 🪔</p>
          <img
            src="/images/20.jpg"
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
          <p>BESTFRIENDS 💞</p>
          <img
            src="/images/21.jpg"
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
          <p>you are more prettier than the scenery..... jk</p>
          <img
            src="/images/6.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section11"
      >
        <div className="content">
          <p>MY FAVOURITE PICTURE OF US ❤️</p>
          <img
            src="/images/7.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
        <button type="button" className='bottom-right-button' onClick={handleButtonClick}></button>
      </section>
    </div>
  );
}

export default Page2;

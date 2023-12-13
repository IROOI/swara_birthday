import React, { useEffect } from 'react';

function Page5() {

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
          <p>the oldest picture of us i could find 👨‍👩‍👧‍👦</p>
          <img
            src="/images/24.jpg"
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
          <p>The most memorable moments of me were with us together. 🏖️</p>
          <img
            src="/images/25.jpg"
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
          <p>some of your old birthday pictures.</p>
          <img
            src="/images/28.jpg"
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
            src="/images/27.jpg"
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
            src="/images/26.jpg"
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
          <p>Selfieeeees 📷 <br />⬇️</p>
          <img
            src="/images/45.jpg"
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
          <img
            src="/images/44.jpg"
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
            src="/images/42.jpg"
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
          <p>Always the most funniest person.... &nbsp; ME</p>
          <img
            src="/images/40.jpg"
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
          <img
            src="/images/37.jpg"
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
          <p>First time we travelled together on plane. <br />Mumbai ✈️ Manali</p>
          <img
            src="/images/38.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section12"
      >
        <div className="content">
          <p>Every festival is fun with you 💜</p>
          <img
            src="/images/32.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section12"
      >
        <div className="content">
          <p>Went on a long journey......</p>
          <img
            src="/images/53.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section13"
      >
        <div className="content">
          <p style={{ fontSize: '20px' }}>❤️🩷🧡💛💚💙🩵💜🤍</p>
          <img
            src="/images/43.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
      </section>
      <section
        className="section"
        id="section13"
      >
        <div className="content">
          <p style={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.6)', fontSize: '18px' }}>I miss you a lot pippoooo. But I'm super happy and blessed to have a sister like you. You are an inspiration for me. <br />Since I was younger I always looked up to you and always followed you everywhere. You are super kind and (hate to say it) smart. <br /> You shine brighter than sun always radiating positivity. I have learnt a lot from you (obviously not). <br /> Hope you achieve everything you desire and have fun on the way. Wishing you very very very Happy Birthday Pippoo. Many more to come... <br /> <br /> PS. Don't cry now 😂😂😂. You are an excellent person 🩵. I am so grateful you are my sister.</p>
        </div>
      </section>
    </div>
  );
}

export default Page5;

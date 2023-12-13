import {useNavigate} from 'react-router-dom'
import React,{ useEffect } from 'react';

function Page3() {
  const navigate = useNavigate();

  const handleButtonClick=()=>{
    navigate('/pass4')
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
          <p>parisarkhi sundar aahes tujhi aai houn jhale mi dhanya. 🧚</p>
          <img
            src="/images/12.jpg"
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
          <p>tu majha baal, mi tujhi maasa. kadhi majhyapasun doordeshi gela kalalach nahi.💜 </p>
          <img
            src="/images/23.jpg"
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
          <p>majha baal, asa ekahi divas ekahi kshan nahi gela ki tujhi aathvan nahi aali. 😭</p>
          <img
            src="/images/46.jpg"
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
          <p>khup khup mothi ho, itki mothi ho ki aakash tujhya samor chota padel. 🌞</p>
          <img
            src="/images/47.jpg"
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
          <p>majha baal, majha shvaas, majha heart 🩵</p>
          <img
            src="/images/48.jpg"
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
            <p>eiula sa baal kadhi motha jhala kalalach nahi. tujhi pragati tujha yash mi dhanya dhanya jhale. 🥰</p>
            <img
              src="/images/49.jpg"
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
          <p>aaj paryant tu saaryancha vichar kelas, mala bara vatava mhanun nehmi majhya maage aai saarkhi ubhi rahilis. 💖</p>
          <img
            src="/images/52.jpg"
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
          <p>majha baal saata- samudrapar gela ✈️, janu majha kaalija cha tukda kadhun nela. Pan roz tula baghun mi manala samjun nela. 🩷</p>
          <img
            src="/images/50.jpg"
            className="img1"
            alt="Interactive Image"
          />
        </div>
        <button type="button" className='bottom-right-button' onClick={handleButtonClick}></button>
      </section>
    </div>
  );
}

export default Page3;

import React from 'react';
import '../App.css';
import myGif from './hug.gif'

function Card() {
    return (
        <>
            <div className="card">
                <div className="card-front">
                    <h3 className="wish">Happy Birthday</h3>
                    <img src="/images/1.jpg" className='cardImg wish' alt="Card Front Image" />
                </div>
                <div className="card-inside">
                    <h3 className="back">Happy Birthday</h3>
                    <p>Dear Pikachu,</p>
                    <p style={{fontFamily: 'Segoe UI', fontSize: '14px'}}>A very very very Happie Birthday to you. <br /><br />It's been 4 months already since you left for masters. First time you are away from me for so long. I hope that you are having fun, learning new things, making friends. I wanted to make this for a long time. Each section is regarding someone which needs password to unlock. Hope you like it &lt;3 <br />A very very very bigggggggggggg hug to you.<br /> <br />not putting itna efforts next time. ENJOY! </p>
                    <div className="gif">
                    <img src={myGif} alt="my-gif" style={{ maxWidth: '30%' }} />
                    <p className='sal' style={{fontSize: 'small'}}>Your cutest bro <br /></p>
                    <p className="name">Suyesh</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Card;

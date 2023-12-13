import React,{useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const Pass2 = () => {

    const navigate = useNavigate();
    const correctPassword1 = 'pappa'; 
    const correctPassword2 = 'papa'; 
    const [enteredPassword, setEnteredPassword] = useState('');

    const handlePasswordChange = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setEnteredPassword(lowerCase);
    };

    const handlePassClick = () => {
        if (enteredPassword === correctPassword1 || enteredPassword ===correctPassword2) {
            navigate('/page4'); 
        } else {
            toast.error("Dumbo! Try again 😜");
        }
    };

    return (
        <>
            <form>
                <h3 style={{ fontWeight: 'lighter' }}>The person who is always there firm as a pillar stronger than wall <br />but doesn't know how to express feelings. 👨 </h3>
                <label className='passLabel'>
                    <input type="password" className='passInp' onChange={handlePasswordChange} />
                </label>
                <button type="submit" className='passBtn' onClick={handlePassClick}>Enter</button>
            </form>
        </>
    )
}

export default Pass2
import React,{useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const Pass2 = () => {

    const navigate = useNavigate();
    const correctPassword1 = 'suyesh'; 
    const correctPassword2 = 'swaranjali'; 
    const [enteredPassword, setEnteredPassword] = useState('');

    const handlePasswordChange = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setEnteredPassword(lowerCase);
    };

    const handlePassClick = () => {
        if (enteredPassword === correctPassword1) {
            navigate('/page2'); 
        }
        else if(enteredPassword === correctPassword2){
            navigate('/page2');
        }
        else {
            toast.error("Dumbo! Try again 😜");
        }
    };

    return (
        <>
            <form>
                <h3 style={{ fontWeight: 'lighter' }}>I am the <span style={{fontWeight: 'bold'}}>smartest</span> person in the world 😎. Who am I?</h3>
                <label className='passLabel'>
                    <input type="password" className='passInp' onChange={handlePasswordChange} />
                </label>
                <button type="submit" className='passBtn' onClick={handlePassClick}>Enter</button>
            </form>
        </>
    )
}

export default Pass2
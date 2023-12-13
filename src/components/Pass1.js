import React,{useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const Pass1 = () => {

    const navigate = useNavigate();
    const correctPassword1 = 'swaranjali'; 
    const correctPassword2 = 'suyesh'; 
    const [enteredPassword, setEnteredPassword] = useState('');

    const handlePasswordChange = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setEnteredPassword(lowerCase);
    };

    const handlePassClick = () => {
        if (enteredPassword === correctPassword1) {
            navigate('/page1'); 
        }
        else if(enteredPassword === correctPassword2){
            navigate('/page1')
        }
        else {
            toast.error("Dumbo! Try again 😜");
        }
    };

    return (
        <>
            <form>
                <h3 style={{ fontWeight: 'lighter' }}>I am the <span style={{fontWeight: 'bold'}}>dumbest</span> person in the world 😎. Who am I?</h3>
                <label className='passLabel'>
                    <input type="password" className='passInp' onChange={handlePasswordChange} />
                </label>
                <button type="submit" className='passBtn' onClick={handlePassClick}>Enter</button>
            </form>
        </>
    )
}

export default Pass1
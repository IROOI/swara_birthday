import React,{useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const Pass2 = () => {

    const navigate = useNavigate();
    const correctPassword = 'maasa'; 
    const [enteredPassword, setEnteredPassword] = useState('');

    const handlePasswordChange = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setEnteredPassword(lowerCase);
    };

    const handlePassClick = () => {
        if (enteredPassword === correctPassword) {
            navigate('/page3'); 
        } else {
            toast.error("Dumbo! Try again 😜");
        }
    };

    return (
        <>
            <form>
                <h3 style={{ fontWeight: 'lighter' }}>the person who is the most innocent and kindest person <br />you have ever seen. 👩</h3>
                <label className='passLabel'>
                    <input type="password" className='passInp' onChange={handlePasswordChange} />
                </label>
                <button type="submit" className='passBtn' onClick={handlePassClick}>Enter</button>
            </form>
        </>
    )
}

export default Pass2
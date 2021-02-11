import React, { useState } from 'react';
import { login } from '../api/apiCalls';

export interface LoginFormProps {
    
}
 
const LoginForm: React.SFC<LoginFormProps> = () => {

    const [state, setState] = useState({ username: '', password: '' });
    const [error, setError] = useState('');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setState(prevState => ({ ...prevState, [id]: value }));
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(state, setError);
    }

    return ( 
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" id='username' value={state.username} onChange={handleChange} 
                        className='input' placeholder='Username' required/>
                    <input type="password" id='password' value={state.password} onChange={handleChange} 
                        className='input' placeholder='Password' required/>
                    <div style={{ textAlign: 'center' }}>
                        <button className='button' type='submit'>
                            <span>Start Chatting</span>
                        </button>
                    </div> 
                    <h2 className='error'>{error}</h2>   
                </form>
            </div>
        </div>
    );
}
 
export default LoginForm;

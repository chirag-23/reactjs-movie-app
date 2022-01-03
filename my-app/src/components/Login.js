import React, {useState, useContext} from "react";

import { useNavigate } from "react-router-dom";

import API from '../API';

// Components
import Bottombtn from "./BottomBtn";

// Styles
import { Wrapper } from "./Login.style";

// Context
import { Context } from "../context";

const Login = () =>{
        
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [_user, setUser] = useContext(Context);
    
    const navigate = useNavigate();

    const handleInput = e =>{
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name === 'username'){
            setUsername(value);
        }
        if(name === 'password'){
            setPassword(value);
        }
    };

    const handleSubmit = async () =>{
        setError(false);
        try{
            const requestToken = await API.getRequestToken();
            const sessionID = await API.authenticate(requestToken, username, password);

            setUser({ sessionID: sessionID.session_id , username });
            
            navigate('/');
        }catch(error){
            setError(true);
        }
    };

    return(
        <Wrapper>            
                {error && <div className="error"> Incorrect username or password ! </div>}

                <label> Username: </label>
                <input type='text' value={username} name="username" onChange={handleInput} />
                <label> Password: </label>
                <input type='password' value={password} name="password" onChange={handleInput} /> 
                <Bottombtn text='Login' callback={handleSubmit} />
                <label>Don't have a TMDB account? <a href="https://www.themoviedb.org/signup" target='_blank'>Sign Up</a></label>
        </Wrapper>
    )
}

export default Login;
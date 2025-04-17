import React, { useState } from "react";
import authService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../main';
import ReCAPTCHA from "react-google-recaptcha";

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { user, setUser } = React.useContext(userContext);
    const [loading, setLoading] = useState(false);
    
    const handleLogin = async () => {
        setLoading(true);
        const userData = await authService.login(username, password);
        setUser(userData);        
        navigate('/');
    }

    return(
        <div>
            <form>
                <label>Email:</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                <label>Password:</label>
                <input type="text" onChange={(e) => setPassword(e.target.value)}/>
                <ReCAPTCHA
                    sitekey="6Lf-OhwrAAAAAFq6NjWY9GfRJ-ugFfCokGSHrMnF"
                />
                <button type="button" onClick={() => handleLogin()}>{loading ? "Loading..." : "Login"}</button>
            </form>
        </div>
    )
}
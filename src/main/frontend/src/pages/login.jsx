import { useState } from "react";
import authService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';

const baseurl = "http://localhost:8080/api"

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        await authService.login(username, password).then(() =>{ 
            navigate('/');
        });
    }

    return(
        <div>
            <form>
                <label>Email:</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                <label>Password:</label>
                <input type="text" onChange={(e) => setPassword(e.target.value)}/>
                <button type="button" onClick={() => handleLogin()}>Login</button>
            </form>
        </div>
    )
}
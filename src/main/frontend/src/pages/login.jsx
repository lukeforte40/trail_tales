import React, { useEffect, useRef, useState } from "react";
import authService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../main';
import ReCAPTCHA from "react-google-recaptcha";
import styles from '../styles/pages/login.module.scss';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = React.useContext(userContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const recaptcha = useRef(null);

    // reset error after a certain amount of time

    useEffect(() =>{
        setTimeout(() => {setError(null)}, 10000);
    },[error])

    // handle login and form validation

    const handleLogin = async () => {
        setLoading(true);
        document.getElementById('submitButton').disabled = true;
        if (recaptcha.current.getValue() !== "") {
            try{
                const userData = await authService.login(username, password);
                setUser(userData);        
                navigate('/');
            }
            catch{
                setError("Error! Please check your username and password and try again.")
            }
        }
        else if (username !== '' && password !== ''){
            setError("Please complete the Recaptcha.");
        }
        setLoading(false);
        document.getElementById('submitButton').disabled = false;   
    }

    return(
        <div id={styles.backgroundImage}>
            <div id={styles.loginContainer}>
                <h1>Log in</h1>
                {error !== null && <p id={styles.error}>{error}</p>}
                <form onSubmit={e => e.preventDefault()}>
                    <label>Email:</label>
                    <input type="email" className={styles.formInp} onChange={(e) => setUsername(e.target.value)} required/>
                    <label>Password:</label>
                    <input type="password" className={styles.formInp} onChange={(e) => setPassword(e.target.value)} required/>
                    <ReCAPTCHA
                        id={styles.recaptcha}
                        ref={recaptcha}
                        sitekey="6Lf-OhwrAAAAAFq6NjWY9GfRJ-ugFfCokGSHrMnF"
                    />
                    <button type="submit" id="submitButton" onClick={() => handleLogin()}>{loading ? "Loading..." : "Login"}</button>
                </form>
            </div>
        </div>
    )
}
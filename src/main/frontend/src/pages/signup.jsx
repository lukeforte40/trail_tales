import React, { useEffect, useRef, useState } from "react";
import authService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../main';
import ReCAPTCHA from "react-google-recaptcha";
import styles from '../styles/pages/signup.module.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState(undefined);
    const navigate = useNavigate();
    const { setUser } = React.useContext(userContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const recaptcha = useRef(null);

    // reset error after a certain amount of time

    useEffect(() =>{
        setTimeout(() => {setError(null)}, 10000);
    },[error])

    // signup function

    const handleSubmit = async () =>{
        setLoading(true);
        document.getElementById('submitButton').disabled = true;
        if (recaptcha.current.getValue() !== "" && email !== '' && password !== '' && phone !== '') {
            const userData = await authService.register(email, phone, picture === undefined ? "null" : picture.name, password);
            setUser(userData);        
            navigate('/')
        }
        else if (email !== '' && password !== '' && phone !== ''){
            setError("Please complete the Recaptcha.");
        }
        setLoading(false);
        document.getElementById('submitButton').disabled = false;   
    }

    return(
        <div id={styles.backgroundImage}>
            <div id={styles.signupContainer}>
                <h1>Sign up</h1>
                {error !== null && <p id={styles.error}>{error}</p>}
                <form onSubmit={e => e.preventDefault()}>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div id={styles.phoneInpContainer}>
                        <label>Phone:</label>
                        <PhoneInput
                        country={'us'}
                        value={phone}
                        onChange={setPhone}
                        />
                    </div>
                    <div>
                        <label>Profile Picture:</label>
                        <input id={styles.profPicInput} type="file" value={picture} onChange={(e) => setPicture(e.target.files[0])}/>
                    </div>
                    <ReCAPTCHA
                            id={styles.recaptcha}
                            ref={recaptcha}
                            sitekey="6Lf-OhwrAAAAAFq6NjWY9GfRJ-ugFfCokGSHrMnF"
                    />
                    <button type="submit" id="submitButton" onClick={() => handleSubmit()}>{loading ? "Loading..." : "Sign up"}</button>
                    </form>
            </div>
        </div>
    )
}
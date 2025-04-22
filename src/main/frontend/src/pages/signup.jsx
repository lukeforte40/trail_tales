import React, { useEffect, useRef, useState } from "react";
import authService from "../services/auth.service";
import uploadService from "../services/upload-service";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../main';
import ReCAPTCHA from "react-google-recaptcha";
import styles from '../styles/pages/signup.module.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState(undefined);
    const navigate = useNavigate();
    const { setUser } = React.useContext(userContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const recaptcha = useRef(null);
    const formData = new FormData();

    // reset error after a certain amount of time

    useEffect(() =>{
        setTimeout(() => {setError(null)}, 10000);
    },[error])

    // signup function

    const handleSubmit = async () =>{
        setLoading(true);
        document.getElementById('submitButton').disabled = true;
        // if form has all necessary inputs
        if (recaptcha.current.getValue() !== "" && email !== '' && password !== '' && phone !== '' &&  password === confPassword) {
            let imgResponse;
            // if there is an image upload it
            if (picture !== undefined) {
                formData.append("image", picture)
                imgResponse = await uploadService.Image(formData);
            }       
            try{
                const userData = await authService.register(email, phone, picture === undefined ? "default.png" : imgResponse, password);
                setUser(userData);  
                navigate('/');
            }
            catch(error){
                setError(error.response.data.message)
            }
        }        
        // if the passwords don't match
        else if(recaptcha.current.getValue() !== "" && email !== '' && password !== '' && phone !== '' && password !== confPassword){
            setError("Error: Passwords Don't match!")
        }
        // if phone number is empty or not fully filled in
        else if(email !== '' && password !== '' && (phone === '' || phone.length !== 11)){
            setError("Please add your full phone number.");
        }
        // if the the recaptcha is not done but everything else is
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
                        <input type="email" className={styles.formInp} value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" className={styles.formInp} value={password} onChange={(e) => setPassword(e.target.value)} required minLength={10} maxLength={30} />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" className={styles.formInp} value={confPassword} onChange={(e) => setConfPassword(e.target.value)} required minLength={10} maxLength={30} />
                    </div>
                    <div id={styles.phoneInpContainer}>
                        <label>Phone:</label>
                        <PhoneInput
                        country={'us'}
                        value={phone}
                        onChange={setPhone}
                        inputProps={{
                        }}
                        />
                    </div>
                    <div>
                        <label>Profile Picture:</label>
                        <input id={styles.profPicInput} accept="image/*" type="file" onChange={(e) => setPicture(e.target.files[0])}/>
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
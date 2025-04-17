import React, { useState } from "react"
import authService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../main';
import ReCAPTCHA from "react-google-recaptcha";

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState(undefined);
    const navigate = useNavigate();
    const { user, setUser } = React.useContext(userContext);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () =>{
        setLoading(true);
        const userData = await authService.register(email, phone, picture === undefined ? "null" : picture.name, password);
        setUser(userData);        
        navigate('/')
    }

    return(
        <div>
            <h1>Sign up</h1>
            <form>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label>Phone Number</label>
                <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label>Profile Pic</label>
                <input type="file" value={picture} onChange={(e) => setPicture(e.target.files[0])}/>
                <ReCAPTCHA
                    sitekey="6Lf-OhwrAAAAAFq6NjWY9GfRJ-ugFfCokGSHrMnF"
                />
                <button type="button" onClick={() => handleSubmit()}>{loading ? "Loading..." : "Sign up"}</button>
            </form>
        </div>
    )
}
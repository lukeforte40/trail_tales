import { useState } from "react"
import authService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState(undefined);
    const navigate = useNavigate();

    const handleSubmit = async () =>{
        await authService.register(email, phone, picture === undefined ? "null" : picture.name, password).then(
            navigate('/')
        );
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
                <button type="button" onClick={() => handleSubmit()}>Sign up</button>
            </form>
        </div>
    )
}
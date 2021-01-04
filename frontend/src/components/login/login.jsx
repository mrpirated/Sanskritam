import React, {useState,useEffect} from "react";

import "./login.scss";

export default function Login() {
    const containerClassInitial = "container login-container";
    const [containerClass, setContainerClass] = useState(containerClassInitial);
    const [data,setdata] = useState('');
    const signUpClick = () => {
        setContainerClass(containerClassInitial + "  right-panel-active");
    }

    const signInClick = () => {
        setContainerClass(containerClassInitial);
    }
    const signin = e=>{
        e.preventDefault()
        fetch("http://localhost:9000/signin",{
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: { 'Content-Type': 'application/json' },
          })
        .then(response => {
            console.log(response)
            response.json()
            
        })
        
    }
    const signup = e=>{
        e.preventDefault()
        fetch("http://localhost:9000/signup",{
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: { 'Content-Type': 'application/json' },
          })
        .then(response => {
            response.json()
            console.log(response)
        })
    }
    

    return (
        //<div>
            <div className={containerClass} >
                <div className="form-container sign-up-container">
                    <form action="#" onSubmit = {signup}>
                        <h1 className="login-h1">Create Account</h1>
                        {/* <div class="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div> */}
                        <span className="login-span">or use your email for registration</span>
                        <input type="text" placeholder="Name"
                        onChange ={e => setdata({ ...data, name: e.target.value })}/>
                        <input type="email" placeholder="Email"
                        onChange ={e => setdata({ ...data, email: e.target.value })}/>
                        <input type="password" placeholder="Password"
                        onChange ={e => setdata({ ...data, password: e.target.value })}/>
                        <button className="login-btns">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#" onSubmit ={signin}>
                        <h1 className="login-h1">Sign in</h1>
                        {/* <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div> */}
                        <span className="login-span">or use your account</span>
                        <input type="email" placeholder="Email" 
                        onChange ={e => setdata({ ...data, email: e.target.value })}/>
                        <input type="password" placeholder="Password" 
                        onChange ={e => setdata({ ...data, password: e.target.value })}/>
                        <a className="login-a" href="#">Forgot your password?</a>
                        <button className="login-btns">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="login-h1">Welcome Back!</h1>
                            <p className="login-p">To keep connected with us please login with your personal info</p>
                            <button className=" login-btns ghost" id="signIn" onClick={signInClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="login-h1">Welcome to Sanskritam</h1>
                            <p className="login-p">Enter your personal details and start journey with us</p>
                            <button className="login-btns ghost" id="signUp" onClick={signUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        //</div> 
    );
};
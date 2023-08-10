'use client';
import React from 'react';
import classes from '../styles/login.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/assets/logo.png'
const Login: React.FC = () => {
    const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('login');
    };

    return (
        <div className={classes.login_container}>
            <div style={{backgroundColor:"rgb(0,0,0,0.4)",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <nav style={{position:"absolute",top:"15px",left:"2rem",zIndex:5}}>
                <Image src={logo} alt="logo" width={150} height={50}/>
            </nav>
            <div className={classes.login_wrapper}>
                <h2>Sign In</h2>
                <form className={classes.login_form} onSubmit={loginHandler}>
                    <input type="text" placeholder="Email" className={classes.login_input} />
                    <input type="password" placeholder="Password" className={classes.login_input} />
                    <div className={classes.forgot_pass}>
                        <Link href="/" className={classes.login_forgot}>
                            Forgot Password?
                        </Link>
                    </div>
                    <button className={classes.login_button}>Sign In</button>
                    <div className={classes.login_last}>
                        New to Netflix?
                        <Link href="/" className={classes.login_register}>
                            Create a New Account
                        </Link>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;

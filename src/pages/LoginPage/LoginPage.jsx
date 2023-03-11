import React from 'react'

// import { Link, useNavigate } from "react-router-dom";

import styles from "./LoginPage.module.css";

// import { REGISTER_URL } from "../../constants/urls";
import { useState } from "react";
// import {loginWithEmailAndPassword, signInWithGoogle,} from "../../firebase/auth-service";
import logo from '../../assets/logo.png'


export function LoginPage() {
    // const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const handleSignWithGoogle = async () => {
      await signInWithGoogle();
    };

    const handleOnChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const onSubmit = async (event) => {
      try{
        event.preventDefault();
        const { email, password } = formData;
        await loginWithEmailAndPassword(email, password);
        console.log("Succesfull!");
        alert("Successfull Login!!");
        navigate("/profile");
      }catch(error){
        console.log(error);
        console.log("Credentials not found!");
        alert("Credentials not found, Sign UP!!");
      }
    };

    return (
      <div className={styles.wholePage}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
          {/* <img src={logo} className={styles.logo}/>  */}
          <h1 className={styles.title}>Welcome!</h1>
          <p className={styles.welcomeTxt}>
            Login we're glad to help you!
          </p>

          {/* EMAIL FIELD */}
          <div className={styles.inputContainer}>
            <h3 htmlFor="email">
              Email
            </h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ejmp. simon@email.com"
              onChange={handleOnChange}
              required
            />
          </div>

          {/* PASSWORD FIELD */}
          <div className={styles.inputContainer}>
            <h3 htmlFor="password">
              Password
            </h3>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className={styles.ButtonCont}>
            <button type="forgot" className={styles.forgotButton}>
              Forgot?
            </button>
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </div>

          <button
            type="button"
            className={styles.googleButton}
            onClick={handleSignWithGoogle}
          >
            Continue with Google
          </button>
          {/* TODO: inicio de sesion con facebook */}
          <button
            type="button"
            className={styles.twitterButton}
            onClick={handleSignWithGoogle}
          >
            Continue with Twitter
          </button>

          {/* <Link to={REGISTER_URL} className={styles.loginRedirect}>
            ¿No sign in yet?{" "}
            <span className={styles.redirectLink}>SIGN IN</span>
          </Link> */}
        </form>
      </div>
      </div>
    );
}


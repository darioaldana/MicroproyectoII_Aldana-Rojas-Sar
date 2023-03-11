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
      <div class="flex justify-center items-center w-full h-full">
      <div class = "w-6/12 flex-wrap">
        <form class ="bg-yellow-200 w-full p-12 grid mt-16 rounded-3xl grid-cols-1 gap-y-10" onSubmit={onSubmit}>
          {/* <img src={logo} className={styles.logo}/>  */}
          <h1 class = "text-4xl text-center font-semibold text-black bg-yellow-200 tracking-tighter">Welcome!</h1>
          <p class = "font-normal text-base leading-6 text-center text-black mb-2 bg-yellow-200">
            Login we're glad to help you!
          </p>

          {/* EMAIL FIELD */}
          <div className={styles.inputContainer}>
            <h3 class = "block text-sm font-medium leading-5 mb-0 text-gray-800 bg-yellow-200" htmlFor="email">
              Email
            </h3>
            <input
              class = "block w-full rounded-none text-base leading-6 font-normal bg-gray-400"
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
            <h3 class = "block text-sm font-medium leading-5 mb-0 text-gray-800 bg-yellow-200"  htmlFor="password">
              Password
            </h3>
            <input
              class = "block w-full rounded-none text-base leading-6 font-normal bg-gray-400"
              type="password"
              name="password"
              id="password"
              placeholder="********"
              onChange={handleOnChange}
              required
            />
          </div>
          <div class="grid-cols-2 inline-flex bg-yellow-200 gap-x-10 items-stretch justify-center">
            <button type="forgot" class="block h-10 w-1/3  bg-gray-400 font-bold text-base leading-6 text-black cursor-pointer rounded-md">
              Forgot?
            </button>

            <button type="submit" class="block h-10 w-1/3 bg-gray-400 font-bold text-base leading-6 text-black cursor-pointer rounded-md">
              Login
            </button>
          </div>

          <button
            type="button"
            class = "block h-10 bg-gray-400 font-bold text-base leading-6 text-black cursor-pointer rounded-2xl"
            onClick={handleSignWithGoogle}
          >
            Continue with Google
          </button>

          <button
            type="button"
            class = "block h-10 bg-gray-400 font-bold text-base leading-6 text-black cursor-pointer rounded-2xl"
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


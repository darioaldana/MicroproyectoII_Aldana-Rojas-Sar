import React from 'react'

// import { Link, useNavigate } from "react-router-dom";

// import { REGISTER_URL } from "../../constants/urls";
import { useState } from "react";
import {loginWithEmailAndPassword, signInWithGoogle,} from "../../firebase/auth";
import logo from '../../assets/logo.png'


export function LoginPage() {
    // const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const onSuccess = () => {
      alert("Success.")
    };
  
    const onFail = (_error) => {
      alert("Failure.")
    };

    
    const handleSignWithGoogle = async () => {
      await signInWithGoogle(
        {onSuccess: () => alert(Exitazo)}
      );
    };

    const handleOnChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const onSubmit = async (event) => {
      event.preventDefault();
      await loginWithEmailAndPassword({ userData: formData, onSuccess, onFail });
    };

    return (
      <div class="flex justify-center items-center box-border bg-[#7e1616] w-screen h-screen p-0 m-0">

        <form class ="bg-yellow-200 w-1/2 p-12 grid mt-16 rounded-3xl grid-cols-1 gap-y-5" onSubmit={onSubmit}>
          {/* <img src={logo} className={styles.logo}/>  */}
          <h1 class = "text-4xl text-center font-semibold text-black bg-yellow-200 tracking-tighter">Welcome!</h1>
          <p class = "font-normal text-base leading-6 text-center text-black mb-2 bg-yellow-200">
            Login to a new way of enjoying cinema
          </p>

          {/* EMAIL FIELD */}
          <div>
            <h3 class = "block text-sm font-medium leading-5 mb-0 text-gray-800 bg-yellow-200" htmlFor="email">
              Email
            </h3>
            <input
              class = "block w-full rounded-none text-base leading-6 font-normal bg-gray-100 text-black placeholder:text-gray-400 pl-[14px] h-9"
              type="email"
              name="email"
              id="email"
              placeholder= "fulanito@mail.com" 
              onChange={handleOnChange}
              required
            />
          </div>

          {/* PASSWORD FIELD */}
          <div>
            <h3 class = "block text-sm font-medium leading-5 mb-0 text-gray-800 bg-yellow-200"  htmlFor="password">
              Password
            </h3>
            <input
              class = "block w-full rounded-none text-base leading-6 font-normal text-black bg-gray-100 placeholder:text-gray-400 pl-[14px] h-9"
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
            class = "block h-10 font-bold text-base leading-6 text-black cursor-pointer rounded-2xl bg-red-400 hover:scale-105"
            onClick={handleSignWithGoogle}
          >
            Continue with Google
          </button>

          <button
            type="button"
            class = "block h-10 font-bold text-base leading-6 text-black cursor-pointer rounded-2xl bg-blue-400 hover:scale-105"
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
    );
}


import React, { useEffect } from 'react'

// import { Link, useNavigate } from "react-router-dom";

// import { REGISTER_URL } from "../../constants/urls";
import { useState } from "react";
import GoogleLogo from "../../assets/google.png"
import FacebookLogo from "../../assets/facebook.png"

import {loginWithEmailAndPassword, signInWithGoogle,} from "../../firebase/auth";
import logo from '../../assets/logo.png'

import { fetchMovies } from "../../api/api"


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
    try {
      event.preventDefault();
      const { email, password } = formData;
      await loginWithEmailAndPassword(email, password);
      console.log("Succesfull!");
      alert("Successfull Login!!");
      navigate("/profile");
    } catch (error) {
      console.log(error);
      console.log("Credentials not found!");
      alert("Credentials not found, Sign UP!!");
    }
  };


    return (
      <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
        
        <div class="mx-auto max-w-2xl text-center">
          <h1 class = "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome!</h1>
          <p class = "mt-2 text-lg leading-8 text-gray-600">
            Login to a new way of enjoying cinema
          </p>
      </div>

      <form class ="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={onSubmit}>
        
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
            Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder='ej: juancito@trucupey.com'
                onChange={handleOnChange}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2.5">
              <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>


        <div className="flex items-center justify-center">
          <button 
            type = "button"
            onClick = {handleSignWithGoogle}
            className="flex flex-col items-center justify-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:scale-105">
            <img src={GoogleLogo} className='h-12' />
            <div className="items-center justify-center">
              <h3 className="block font-semibold text-gray-900">Google</h3>
            </div>
          </button>

          <button className="flex flex-col items-center justify-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:scale-105">
            <img src={FacebookLogo} className='h-12 p-1' />
            <div className="items-center justify-center">
              
              <h3 className="block font-semibold text-gray-900">Facebook</h3>
            </div>
          </button>
        </div>
      </form>       
      </div>
    );
}

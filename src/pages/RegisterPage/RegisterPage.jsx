import { useState } from 'react'
import GoogleLogo from "../../assets/google.png"
import FacebookLogo from "../../assets/facebook.png"
import { Link, useNavigate } from "react-router-dom";
import {
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../../firebase/auth"
import { HomePageUrl, LoginPageUrl } from "../../constants/url";

export function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setData] = useState({});

    const onSuccess = () => navigate(HomePageUrl);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await registerWithEmailAndPassword({
            userData: formData,
            onSuccess: onSuccess,
        });
    };

    const handleGoogleClick = async () => {
        await signInWithGoogle({ onSuccess: onSuccess });
    };

    const onChange = (event) => {
        setData((oldData) => ({
            ...oldData,
            [event.target.name]: event.target.value,
        }));
    };


    return (
        <div className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Register</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Enter your data to access the application
                </p>
            </div>

            <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                autoComplete="given-name"
                                placeholder="Eg. Pedro"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="secondName"
                                id="secondName"
                                autoComplete="family-name"
                                placeholder="Eg. Navaja"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                placeholder=' Eg. pedrito@email.com"'
                                onChange={onChange}
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={handleSubmit}
                    >
                        Register Account
                    </button>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        type="button"
                        className="flex flex-col items-center justify-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:scale-105"
                        onClick={handleGoogleClick}>
                        <img src={GoogleLogo} className='h-12' />
                        <div className="items-center justify-center">
                            <h3 className="block font-semibold text-gray-900">Google</h3>

                        </div>
                    </button>

                    <button
                        type="button"
                        className="flex flex-col items-center justify-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:scale-105"
                        onClick={handleGoogleClick}>
                        <img src={FacebookLogo} className='h-12 p-1' />
                        <div className="items-center justify-center">

                            <h3 className="block font-semibold text-gray-900">Facebook</h3>
                        </div>
                    </button>
                </div>

                <div className='mt-3 flex flex-col items-center justify-center'>
                    <Link to={LoginPageUrl} className="block font-semibold text-sm text-gray-900 hover:scale-105 center" >
                        Do you have an account?{" "}
                        <span>Login</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

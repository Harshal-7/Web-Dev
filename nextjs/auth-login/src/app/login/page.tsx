"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    return (
        <div className="bg-white text-black py-2 min-h-screen">
            <div className="container flex flex-col mx-auto bg-white rounded-lg pt-2 my-2">
                <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                    <div className="flex items-center justify-center w-full lg:p-12">
                        <div className="flex items-center xl:p-10">
                            <div className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                                    Login
                                </h3>
                                {/* <p className="mb-4 text-grey-700">Enter your email and password</p> */}
                                <div className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                                    <img
                                        className="h-5 mr-2"
                                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                                        alt=""
                                    />
                                    Login with Google
                                </div>
                                <div className="flex items-center mb-3">
                                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                    <p className="mx-4 text-grey-600">or</p>
                                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                </div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 text-sm text-start text-grey-900"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={user.email}
                                    onChange={(e)=> setUser({...user,email:e.target.value})}
                                    placeholder="Enter email"
                                    className="flex items-center w-full bg-gray-100 px-4 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                />
                                <label
                                    htmlFor="password"
                                    className="mb-2 text-sm text-start text-grey-900"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={user.password}
                                    onChange={(e)=> setUser({...user,password:e.target.value})}
                                    placeholder="Enter password"
                                    className="flex items-center w-full bg-gray-100 px-4 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                />

                                {/* FORGOT PASSWORD */}
                                <div className=" mb-4">
                                    {/* <Link href="javascript:void(0)" className="text-sm p-2 font-medium text-purple-blue-500">Forget password?</Link> */}
                                </div>
                                <button className="w-full px-6 py-5 mb-5 font-bold leading-none bg-blue-600 text-white transition duration-300 md:w-96 rounded-2xl hover:bg-blue-700 focus:ring-4 focus:ring-blue-100">
                                    Login
                                </button>
                                <p className="text-sm leading-relaxed text-grey-900">
                                    Not registered yet?{" "}
                                    <Link
                                        href="/signup"
                                        className="font-bold text-grey-700"
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoLogoVue } from 'react-icons/io5';
import { FaMagnifyingGlassChart } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async () => {
    console.log(userData);
    try {
      const res = await fetch('/api/auth/', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
      if (res.ok) {
        const response = await res.json();
        // return toast('Created Account Successfully');
        if (response.status === 'success') {
           toast('Login Successful', {
            position: 'top-center',
            autoClose: 1000,
            pauseOnHover: false,
            type: 'success',
            transition: Flip,
            progress: true,
            pauseOnFocusLoss: false,
            // hideProgressBar: true,
            draggable: true,
            closeOnClick: true,
          });
          router.push('/');
        } else {
          return toast('Authentication Failed', {
            position: 'top-center',
            autoClose: 1000,
            pauseOnHover: false,
            type: 'error',
            transition: Flip,
            progress: true,
            pauseOnFocusLoss: false,
            // hideProgressBar: true,
            draggable: true,
            closeOnClick: true,
          });
        }
      }
    } catch (error) {
      return toast('❌ Error Occured..', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Flip,
      });
    }
  };
  return (
    <div className="p-4 bg-white h-screen flex justify-center items-center">
      <ToastContainer />
      <div className="max-w-5xl h-full w-full bg-gray--200 shadow-xl p-4 rounded-xl flex flex-col lg:flex-row items-center justify-between">
        <div className="w-5/7 flex flex-col gap-4 p-4 ">
          <div className="py-6 flex flex-col gap-2 border-b-[1px] border-gray-400">
            <div className="text-brand">
              <IoLogoVue size={50} />
            </div>
            <h1 className="font-medium text-xl">Login Form</h1>
            <p className="text-sm text-gray-500 font-light">
              Welcome to WiseChoice - Let's create your Account
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex flex-col gap-4"
          >
            {/* <div className="flex flex-col gap-1">
          <p className="text-sm">Enter UserName</p>
          <input
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                userName: e.target.value,
              }));
            }}
            type="text"
            className="px-3 py-2 border-[1px] border-text-700 rounded-xl focus:border-brand transition-all outline-none "
            placeholder="Enter UserName"
            required={true}
          />
        </div> */}
            <div className="flex flex-col gap-1">
              <p className="text-sm">Enter Email</p>
              <input
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
                type="text"
                className="px-3 py-2 border-[1px] border-text-700 rounded-xl focus:border-brand transition-all outline-none "
                placeholder="Enter your Email Here"
                required={true}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-full flex justify-between">
                <p className="text-sm">Enter Password</p>
                <a href="#" className="text-sm hover:underline transition-all">
                  Forgot?
                </a>
              </div>
              <input
                onChange={(e) => {
                  setUserData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                type="password"
                className="px-3 py-2 border-[1px] border-text-700 rounded-xl focus:border-brand transition-all outline-none "
                placeholder="Enter your Password Here"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-black to-brand rounded-xl text-white hover:shadow-lg transition-all"
            >
              Login
            </button>
            <p className="self-center text-sm text-gray-500">
              Don't have an Account?
              <Link
                href="/signup"
                className="ml-2 font-medium text-black hover:underline"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
        <div className="relative min-h-[80vh] lg:min-h-full lg:h-full w-full lg:w-1/2 p-8 bg-gradient-to-tr from-green-950 to-[#196144] rounded-xl text-white ">
          <h1 className="text-4xl opacity-10 font-bold font-serif">
            Wise Choice
          </h1>
          <p className="absolute top-36 text-6xl font-serif">
            Make Your {'  '}Shopping{'  '}
            <span className="relative font-medium bg-gradient-to-tr from-green-800 to-green-500 text-transparent bg-clip-text outline-[2px]">
              Wise
              <span className="text-brand hidden md:block absolute lg:-top-5 top-2 -right-16 lg:-right-5">
                <FaMagnifyingGlassChart size={50} />
              </span>
            </span>
          </p>
          <div className="absolute  bottom-5 opacity-30 left-5 text-brand">
            <IoLogoVue size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

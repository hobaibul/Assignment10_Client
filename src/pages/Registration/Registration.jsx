import React from 'react';
import { Link } from 'react-router';

const Registration = () => {
    return (
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8  bg-[#F7F6FF]  mx-auto mt-10">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            
          
            <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-600" />
                
                <hr className="w-full dark:text-gray-600" />
            </div>
            <form noValidate="" action="" className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                </div>
                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">Sign in</button>
            </form>
            <p className="text-sm text-center dark:text-gray-600 mt-5">Dont have account?
                <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline text-purple-800">Sign up here</Link>
            </p>
        </div>
    );
};

export default Registration;
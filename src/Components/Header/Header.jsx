import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/9391703.png'


const Header = () => {
    return (
        <div>

            <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <a className="flex items-center p-2">
                        <img className='w-20' src={logo} alt="" />
                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link to='/' className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Home</Link>
                        </li>
                        <li className="flex">
                            <Link to='/allgroups' className="flex items-center px-4 -mb-1 border-b-2 dark:border-">All Groups</Link>
                        </li>
                        <li className="flex">
                            <Link to='/mygroup' className="flex items-center px-4 -mb-1 border-b-2 dark:border-">My Group</Link>
                        </li>
                        <li className="flex">
                            <Link to='/creategroup' className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Create Group</Link>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <Link to='/login' className="self-center px-8 py-3 rounded">Login</Link>
                        <Link to='/registration' className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Registration</Link>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
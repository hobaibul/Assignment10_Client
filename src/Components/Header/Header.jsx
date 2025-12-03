import React, { useContext } from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import logo from '../../assets/9391703.png'
import { MainContext } from '../../RootLayout/RootLayout';


const Header = () => {
    const navigation = useNavigate();
    const { user, handleLogOut } = useContext(MainContext);
    console.log(user)
    return (
        <div>

            <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">


                    <a className="flex items-center p-2 ju">
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
                        <div className='w-12 h-9 rounded-full mr-5'>
                            <Link to='/Profile'>
                                <img className='rounded-full w-12 h-12' src={`${user ? user.photoURL : ""}`} />
                            </Link>
                        </div>

                        {user ? (
                            <button onClick={handleLogOut} className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">Logout</button>
                        ) : (
                            <>
                                <button onClick={() => navigation('/login')} className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50 mr-5">Login</button>
                                <button onClick={() => navigation('/registration')} className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">Registration</button>
                            </>
                        )
                        }

                    </div>



                </div>
            </header>
        </div>
    );
};

export default Header;
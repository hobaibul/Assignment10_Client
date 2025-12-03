import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { MainContext } from '../../RootLayout/RootLayout';

const Registration = () => {
    const { handleRegistrationWithContext, handleUpdatedProfile, setUser } = useContext(MainContext);



    const handleRegistration = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const Confirm_Password = e.target.Confirm_Password.value;
        console.log(name, email, password);


        handleRegistrationWithContext(email, password)
            .then((result) => {
                const CurrentUser = result.user;

                handleUpdatedProfile({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...CurrentUser, displayName: name, photoURL: photo });


                }).catch((error) => {
                    console.log(error);
                    setUser(CurrentUser);
                });



                alert("User Registration Successfully");
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })

    }

    return (
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8  bg-[#F7F6FF]  mx-auto mt-10">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>


            <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-600" />

                <hr className="w-full dark:text-gray-600" />
            </div>
            <form onSubmit={handleRegistration} action="" className="space-y-8">
                <div className="space-y-4">
                    <div bis_skin_checked="1">
                        <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                        <input type="text" name="name" id="name" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div bis_skin_checked="1">
                        <label className="block mb-2 text-sm">Photo Url</label>
                        <input type="text" name="photo" id="photo" placeholder="photo url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>

                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div bis_skin_checked="1">
                        <div className="flex justify-between mb-2" bis_skin_checked="1">
                            <label htmlFor="password" className="text-sm">Confirm Password</label>

                        </div>
                        <input type="password" name="Confirm_Password" id="Confirm_Password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div className='flex justify-end'>
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                    </div>
                </div>
                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">Sign in</button>
            </form>
            <p className="text-sm text-center dark:text-gray-600 mt-5">Dont have account?
                <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline text-purple-800">Sign up here</Link>
            </p>
        </div>
    );
};

export default Registration;
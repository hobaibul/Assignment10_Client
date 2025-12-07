import React, { useContext } from 'react';
import { MainContext } from '../../RootLayout/RootLayout';
import MyGroups from '../MyGroups/MyGroups';

const Profile = () => {

    const { user, loading } = useContext(MainContext);

    if (loading) {
        return <div className="text-center mt-30 text-xl font-semibold">
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span></div>;
    }

    if (!user) {
        return <div className="text-center py-20 text-xl font-semibold text-red-500">
            No user logged in!
        </div>;
    }


    return (

        <div className="max-w-6xl mx-auto p-8">

            {/* Profile Header Card */}
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl p-8 shadow-xl mb-12 flex flex-col items-center">

                {/* Profile Photo */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                    <img
                        src={`${user ? user.photoURL : ""}`}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Name */}
                <h1 className="text-3xl font-bold drop-shadow-lg">{user.displayName}</h1>

                {/* Email */}
                <p className="text-sm opacity-90 mt-1">{user.email}</p>

                {/* 🔥 STATIC DESCRIPTION ADDED HERE */}
                <p className="mt-4 max-w-xl text-center text-white/90 text-sm leading-relaxed">
                    Hello! I am passionate about joining different hobby groups, meeting new
                    people, and exploring creative activities. I enjoy learning new skills,
                    sharing ideas, and being part of an active and friendly community!
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                    <button className="btn btn-sm bg-white text-purple-600 border-none shadow hover:bg-gray-100">
                        Edit Profile
                    </button>
                    <button className="btn btn-sm bg-white text-indigo-600 border-none shadow hover:bg-gray-100">
                        Settings
                    </button>
                </div>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6">My Groups</h2>

            {/* Groups Grid */}
            <>

                {/* Group Card 1 */}
                <MyGroups></MyGroups>



            </>
        </div>
    );
};

export default Profile;

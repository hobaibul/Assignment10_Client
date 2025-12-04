import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../RootLayout/RootLayout";
import GroupCard from "../../Components/GroupCard/GroupCard";

const MyGroups = () => {
    const { user } = useContext(MainContext);
    const [myGroups, setMyGroups] = useState([]);

    useEffect(() => {
        if (!user?.email) return; // user load হওয়া পর্যন্ত অপেক্ষা

        fetch(`http://localhost:3000/my-groups?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyGroups(data));
    }, [user]);

    return (
        <div className="max-w-6xl mx-auto mt-10 p-6">
            <h1 className="text-3xl font-bold mb-8">My Groups</h1>

            {myGroups.length === 0 && (
                <p className="text-gray-500 text-center">You have not joined any group yet.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myGroups.map((group) => (
                    <GroupCard key={group._id} group={group} />
                ))}
            </div>
        </div>
    );
};

export default MyGroups;

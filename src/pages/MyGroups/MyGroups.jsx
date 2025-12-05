import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../RootLayout/RootLayout";
import GroupCard from "../../Components/GroupCard/GroupCard";

const MyGroups = () => {
    const { user } = useContext(MainContext);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:3000/my-groups?email=${user.email}`)
            .then(res => res.json())
            .then(data => setGroups(data));
    }, [user]);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">My Groups</h1>

            {groups.length === 0 && (
                <p className="text-gray-500">You have not joined any group yet.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {groups.map(group => (
                    <GroupCard key={group._id} hobby={group} />
                ))}
            </div>
        </div>
    );
};

export default MyGroups;

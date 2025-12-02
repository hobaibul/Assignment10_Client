import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from '../../Components/GroupCard/GroupCard';

const AllGroups = () => {
    // Try to get loader data (will work ONLY in route)
  const loaderData = useLoaderData?.() || [];

  // If loaderData = undefined → fallback to []
  const [hobbys, setHobbys] = useState(loaderData);

  // If loader did NOT run (Home page) → fetch manually
  useEffect(() => {
    if (loaderData.length === 0) {
      fetch("http://localhost:3000/hobby")
        .then((res) => res.json())
        .then((data) => setHobbys(data));
    }
  }, []);

  
    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold text-black-500 mb-12">
                Welcome to Our All Groups
            </h1>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    hobbys.map(hobby => <GroupCard key={hobby._id}
                        hobbys={hobbys}
                        setHobbys={setHobbys}
                        hobby={hobby}></GroupCard>)
                }
            </div>
        </div>
    );
};

export default AllGroups;
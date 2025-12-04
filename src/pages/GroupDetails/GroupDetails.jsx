import React from 'react';
import { useLoaderData, Link } from 'react-router';
import { useContext } from "react";
import { MainContext } from "../../RootLayout/RootLayout";

const GroupDetails = () => {
  const hobby = useLoaderData();
  const { _id, name, photo, description, quantity, category, meeting, startDate } = hobby;



  const { user } = useContext(MainContext);

  const handleJoin = async () => {
    if (!user) {
      alert("Please login first");
      return;
    }

    const res = await fetch("http://localhost:3000/join-group", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        groupId: hobby._id,
        userEmail: user.email,
      }),
    });

    const data = await res.json();

    if (data.message === "already-joined") {
      alert("You already joined this group!");
    } else {
      alert("Successfully Joined Group!");
    }
  };




  return (
    <div className="shadow-md bg-[#F7F6FF] pb-12 max-w-10/12 mx-auto">


      <div className="flex justify-between items-center p-8">
        <h1 className="text-4xl font-bold text-purple-700">Group Details</h1>

        <Link to={`/updateGroup/${_id}`}>
          <button className="btn bg-purple-600 hover:bg-purple-700 text-white px-6">
            Update Group
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-6 p-10">

        <div className="col-span-4">
          <div className="p-6 bg-white rounded-xl shadow-md space-y-4">

            <h1 className="text-2xl font-bold text-purple-700 mb-4">
              Group Information
            </h1>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500 font-medium">Group Name</p>
                <p className="text-lg font-semibold">{name}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 font-medium">Category</p>
                <p className="text-lg font-semibold">{category}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 font-medium">Meeting Frequency</p>
                <p className="text-lg font-semibold">{meeting}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 font-medium">Max Members</p>
                <p className="text-lg font-semibold">{quantity}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 font-medium">Start Date</p>
                <p className="text-lg font-semibold">{startDate}</p>
              </div>
            </div>

            <button onClick={handleJoin} className="btn btn-success text-white w-full">Join Group</button>
          </div>
        </div>

        <div className="col-span-8">
          <img src={photo} alt="" className="max-h-96 w-full mb-10 rounded-xl shadow" />

          <h1 className="mb-6 font-bold text-2xl text-purple-700">
            Description
          </h1>

          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

      </div>
    </div>
  );
};

export default GroupDetails;

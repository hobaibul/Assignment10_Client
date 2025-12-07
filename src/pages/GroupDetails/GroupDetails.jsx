import React, { useEffect, useState } from 'react';
import { useLoaderData, Link, useNavigate } from 'react-router';
import { useContext } from "react";
import { MainContext } from "../../RootLayout/RootLayout";
import Swal from 'sweetalert2';

const GroupDetails = () => {
  const hobby = useLoaderData();
  const { _id, name, photo, description, quantity, category, meeting, startDate } = hobby;

  const [join, setJoin] = useState(false);
  const { user } = useContext(MainContext);
  const navigate = useNavigate();

  const BASE_URL = "https://hobbyhub-server-tawny.vercel.app";

  // ✅ JOIN GROUP
  const handleJoinGroup = () => {
    if (!user?.email) {
      alert("Please login first");
      return;
    }

    fetch(`${BASE_URL}/join-group`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ groupId: _id, email: user.email })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === "Already joined") {
          alert("You already joined this group!");
          return;
        }

        alert("Successfully Joined Group");
        setJoin(true);
        navigate('/mygroup');
      });
  };

  // ✅ LEAVE GROUP (FIXED URL)
  const handleDeleteGroup = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will leave this group.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, leave it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`${BASE_URL}/leave-group/${_id}?email=${user.email}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire("Done!", "You left the group.", "success");
              setJoin(false);
            }
          });
      }
    });
  };

  // ✅ CHECK IF JOINED
  useEffect(() => {
    if (!user?.email) return;

    fetch(`${BASE_URL}/check-join?groupId=${_id}&email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setJoin(data.joined);
      });
  }, [user, _id]);


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

            {/* Info Section */}
            <div className="space-y-3">
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Category:</strong> {category}</p>
              <p><strong>Meeting:</strong> {meeting}</p>
              <p><strong>Members:</strong> {quantity}</p>
              <p><strong>Start Date:</strong> {startDate}</p>
            </div>

            {/* Join / Leave Button */}
            {!join ? (
              <button onClick={handleJoinGroup} className="btn btn-success text-white w-full">
                Join Group
              </button>
            ) : (
              <button onClick={handleDeleteGroup} className="btn btn-secondary text-white w-full">
                Leave Group
              </button>
            )}

          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-8">
          <img src={photo} className="max-h-96 w-full mb-10 rounded-xl shadow" />

          <h1 className="mb-6 font-bold text-2xl text-purple-700">Description</h1>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

      </div>
    </div>
  );
};

export default GroupDetails;

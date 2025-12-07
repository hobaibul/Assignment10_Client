import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const GroupCard = ({ hobby, hobbys, setHobbys }) => {




    // defensive check
    if (!hobby) return null;

    const { _id, name, photo, quantity, description = "", category } = hobby;


    return (
        <div className="w-full">
            <div className="card bg-white w-full shadow-md hover:shadow-xl transition-all duration-300 rounded-xl border border-gray-100">

                <figure className="relative">
                    <img
                        src={photo}
                        alt={name}
                        className="h-56 w-full object-cover rounded-t-xl"
                    />

                    <div className="absolute top-3 left-3 px-3 py-1 bg-white/80 backdrop-blur-md rounded-lg text-sm font-medium shadow">
                        {category}
                    </div>
                </figure>

                <div className="card-body space-y-3">

                    <div className="flex justify-between items-center">
                        <h2 className="card-title text-xl font-bold text-gray-800">{name}</h2>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                            {quantity} Members
                        </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        {description.split(" ").slice(0, 13).join(" ")}...
                    </p>

                    <Link to={`/groupDetails/${_id}`}>
                        <button className="btn w-full bg-purple-600 hover:bg-purple-700 text-white mt-2 rounded-lg">
                            See Details
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default GroupCard;

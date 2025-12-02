import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateGroup = () => {

    const data = useLoaderData();

    const {_id, name, category, description, meeting, quantity, startDate, photo} = data;

    const handleUpdateHobby = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedHobby = Object.fromEntries(formData.entries());


        fetch(`http://localhost:3000/hobby/${_id}`,{
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json' 
            },
            body: JSON.stringify(updatedHobby)
        })
        .then(res=> res.json())
        .then(data => {
             if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-mid",
                        icon: "success",
                        title: "Group Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
        })


        
    }

    return (
        <div className="p-6 bg-base-200 border-base-300 rounded-box border px-24">
            <div className="text-center mb-10 px-32">
                <h1 className="text-4xl font-bold mb-6 ">Add New Hobby</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                </p>
            </div>

            <form onSubmit={handleUpdateHobby}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Group Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input w-full"
                            placeholder="Enter your name"
                            defaultValue={name}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Hobby Category</label>

                        <select
                            name="category"
                            defaultValue={category}
                            className="select select-bordered w-full"
                            required
                        >
                            <option disabled selected>Select a hobby category</option>
                            <option value="Drawing & Painting">Drawing & Painting</option>
                            <option value="Photography">Photography</option>
                            <option value="Video Gaming">Video Gaming</option>
                            <option value="Fishing">Fishing</option>
                            <option value="Running">Running</option>
                            <option value="Cooking">Cooking</option>
                            <option value="Reading">Reading</option>
                            <option value="Writing">Writing</option>
                        </select>
                    </fieldset>


                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Description </label>
                        <input
                            type="text"
                            name="description"
                            className="input w-full"
                            placeholder="Enter Description"
                            defaultValue={description}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Meeting Location</label>
                        <input
                            type="text"
                            name="meeting"
                            className="input w-full"
                            placeholder="Enter Meeting Location"
                            defaultValue={meeting}
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Max Members </label>
                        <input
                            type="text"
                            name="quantity"
                            className="input w-full"
                            placeholder="Enter Max Members"
                            defaultValue={quantity}
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            className="input input-bordered w-full"
                            required
                            defaultValue={startDate}
                        />
                    </fieldset>


                </div>

                <fieldset className="fieldset">
                    <label className="label font-bold text-lg">Photo</label>
                    <input
                        type="text"
                        name="photo"
                        className="input w-full"
                        placeholder="Enter photo URL"
                        defaultValue={photo}
                    />
                </fieldset>

                <fieldset className="fieldset mt-4">
                    <button className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateGroup;
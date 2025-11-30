import React from "react";
import Swal from "sweetalert2";

const CreateGroup = () => {

    const handelAddHobby = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newHobby = Object.fromEntries(formData.entries());
        console.log(newHobby);

        // post data
        fetch("http://localhost:3000/hobby", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newHobby)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("after adding coffee db", data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    return (
        <div className="p-6 bg-base-200 border-base-300 rounded-box border px-24">
            <div className="text-center mb-10 px-32">
                <h1 className="text-4xl font-bold mb-6 ">Add New Hobby</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                </p>
            </div>

            <form onSubmit={handelAddHobby}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Group Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input w-full"
                            placeholder="Enter your name"
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Hobby Category</label>

                        <select
                            name="category"
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
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Meeting Location</label>
                        <input
                            type="text"
                            name="meeting"
                            className="input w-full"
                            placeholder="Enter Meeting Location"
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Max Members </label>
                        <input
                            type="text"
                            name="quantity"
                            className="input w-full"
                            placeholder="Enter Max Members"
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label font-bold text-lg">Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            className="input input-bordered w-full"
                            required
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
                    />
                </fieldset>

                <fieldset className="fieldset mt-4">
                    <button className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        </div>
    );
};

export default CreateGroup;   

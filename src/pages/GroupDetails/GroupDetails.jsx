import React from 'react';

const GroupDetails = () => {
    return (
        <Link to={`/Companydetails/${id}`} className='shadow-md bg-[#F7F6FF]  pb-12'>
            <div className='mt-16 flex justify-center pb-3'>

                <div className="avatar">
                    <div className="ring-[#BA9DF5] ring-offset-base- w-20  mx-auto mb-2 rounded-full ring-2 ring-offset-2">
                        <img src={logo} />
                    </div>
                </div>
            </div>
            <h1 className='font-bold text-[#0F1724] text-2xl text-center'>{name}</h1>
            <div className='flex justify-center mt-5'>
                <div className="badge badge-outline bg-[#DFE3F5] px-5 py-4 font-semibold text-[#766df4] ">{jobs.length} Jobs</div>
            </div>
        </Link>
    );
};

export default GroupDetails;
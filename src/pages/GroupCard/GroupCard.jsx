import React from 'react';

const GroupCard = ({group,deletable,handleDelete}) => {
    console.log(group);
    const {name,category,quantity,_id} = group || {};
    return (
        <div className='pb-10'>
            <div className='bg-white p-7 rounded-2xl shadow'>
                <div className='flex justify-between  mb-3'>
                    <div>
                        <h1 className='text-lg font-bold'>Name: {name}</h1>
                        <p className='text-gray-500 mt-1'>Category: {category}</p>
                    </div>
                    <div>
                        <h1 className='text-gray-500 mt-7'>Quantity: {quantity} Tk + Vat</h1>
                    </div>
                </div>
                <div className='flex justify-center mt-2 border-t-1 border-dashed border-gray-300 pt-5'>
                    {deletable && <button onClick={() => handleDelete(id)} className='w-full border-2 border-red-400 p-2 rounded-3xl cursor-pointer text-red-500 font-bold text-lg hover:bg-red-300 hover:text-black'>Leave Group</button>}
                </div>
            </div>

        </div>
    );
};

export default GroupCard;
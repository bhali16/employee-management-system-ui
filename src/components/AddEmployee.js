import React, { useState } from 'react'

function AddEmployee() {

    const [inputLabels, setInputLabels] = useState(0)
    
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>

        <input type='number' value={inputLabels} onChange={(e) => setInputLabels(e.target.value)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 tx-sm font-normal'>First Name</label>
                <input type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 tx-sm font-normal'>Last Name</label>
                <input type='text' className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 tx-sm font-normal'>Email</label>
                <input type='email' className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 pt-4 space-x-4'>
                <button className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700'>Save</button>
                <button className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700'>Clear</button>

            </div>
        </div>
        {inputLabels > 0 && <div className='flex flex-col items-center justify-center h-14 w-full my-4'>Han Jee Bahen Jee</div>}
    </div>
  )
}

export default AddEmployee
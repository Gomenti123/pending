"use client"
import { log } from 'node:console'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaAngleLeft } from 'react-icons/fa'

const page = () => {
  const [name, setName] = useState("")
  const [tag, setTag] = useState("")
  const [amount, setAmount] = useState("")
 const time = new Date()
console.log();
 
  return (
    <div>
      <form className='border w-[400px] p-3 sm:p-5 flex flex-col gap-3'>
        <div className='flex flex-col'>
          <label>Name</label>
          <input onChange={(e)=>{setName(e.target.value)
          }} name='name' className='border' type="text" />
        </div>
        <div className='flex flex-col'>
          <label>Tag</label>
          <input onChange={(e)=>{setTag(e.target.value)
          }} name='tag' className='border' type="text" />
        </div>
        <div className='flex flex-col'>
          <label>Amount</label>
          <input onChange={(e)=>{setAmount(e.target.value)
          }} name='amount' className='border' type="text" />
        </div>
        <div className='flex justify-center'>
        <button className='border p-1 bg-green-400 rounded-md border-none w-[200px] text-white' >Pay</button>
        </div>
        
      </form>
    <div className='flex w-full justify-center items-center h-screen'>
      <div className='bg-neutral-800 w-[300px] h-[505px]'>
        <div className='flex justify-between p-3 items-center'>
        <FaAngleLeft className='text-white text-[20px] font-light' />
        <BsThreeDots className='text-white text-[20px]'/>
        </div>
        <div className='flex justify-center'>
        <div className='rounded-full bg-green-300 h-[50px] w-[50px] flex justify-center items-center'>
          <p className='text-white text-[23px] font-semibold'>{name.trim().charAt(0)}</p>
        </div>
        </div>
        <p className='text-center text-white font-semibold'>{name}</p>
        <p className='text-center text-neutral-400 text-[13px]'>Payment to {tag}</p>


        <div className='flex justify-center flex-col items-center mt-[100px]'>
          <p className='text-[50px] text-neutral-500 font-semibold mb-[-5px]'>${amount}</p>
          <div className='text-neutral-400 flex flex-col items-center text-[14px]'>
          <p>For Allowance ❤️.</p>
          <p>Autthentication Fee $50</p>
          <p>Today at {time.toLocaleTimeString()}</p>
          </div>
        </div>

        <div className='flex justify-center px-5 mt-[80px]'>
          <button className='bg-green-500 w-full rounded-full h-[35px] text-white text-[17px] font-semibold '>Pending</button>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default page

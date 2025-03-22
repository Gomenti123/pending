"use client"
import { log } from 'node:console'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaAngleLeft, FaRegUser } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import img1 from '../public/image1.jpeg'
import img2 from '../public/image2.jpeg'
import img3 from '../public/image3.jpeg'
import img4 from '../public/image4.jpeg'
import Image from 'next/image'

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
      <div className='bg-neutral-900 w-[300px] h-[505px]'>
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
          <div className='text-neutral-400 flex flex-col items-center text-[12px]'>
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

    <div className='flex w-full p-5 justify-center items-center'>
      <div className='bg-neutral-900 w-[430px] h-[350px] flex flex-col gap-3  p-5'>
        <div className='flex justify-between'>
        <p className='text-white text-[20px] font-semibold '>Activity</p>
        <FaRegUser className='text-white font-semibold text-[20px]' />
        </div>
       

        <div className='bg-neutral-800 rounded-full h-[40px] text-neutral-500 text-[18px] flex gap-2 p-2 items-center'>
        <IoSearch />
          <p>Search transactions</p>
        </div>

        <div className='flex gap-3'>
          <div className='flex flex-col gap-1 items-center justify-center'>
          <div className='bg-green-600 rounded-full w-[65px] h-[65px] flex items-center justify-center'> 
            <p className='text-[38px] text-white'>+</p>
          </div>
          <p className='text-white'>Get $5</p>
          </div>
          <div className='flex gap-1 flex-col items-center justify-center'>
          <div className= 'rounded-full w-[65px] h-[65px]'>
            <Image className='rounded-full h-full w-full' src={img1} width={100} alt='#' />
          </div>
          <p className='text-white'>Moneyfeen</p>
          </div>
          <div className='flex flex-col gap-1 items-center justify-center'>
          <div className='bg-green-400 rounded-full w-[65px] h-[65px]'>
          <Image className='rounded-full h-full w-full' src={img2} width={100} alt='#' />
          </div>
          <p className='text-white'>Chanel</p>
          </div>
          <div className='flex gap-1 flex-col items-center justify-center'>
          <div className='bg-green-400 rounded-full w-[65px] h-[65px]'>
          <Image className='rounded-full h-full w-full' src={img3} width={100} alt='#' />
          </div>
          <p className='text-white'>Lucky</p>
          </div>
          <div className='flex gap-1 flex-col items-center justify-center'>
          <div className='bg-green-400 rounded-full w-[65px] h-[65px]'>
          <Image className='rounded-full h-full w-full' src={img4} width={100} alt='#' />
          </div>
          <p className='text-white'>Karolin</p>
          </div>
        </div>

        <div className='flex flex-col gap-4 mt-[10px]'>
          <p className='text-white font-semibold text-[19px]'>Pending</p>
          <div className='flex justify-between gap-3 text-white w-full '> 
            <div className='flex gap-3'>
            <div className='bg-green-300 rounded-full flex justify-center items-center h-[50px] w-[50px]'>
              <p className='font-semibold text-[29px]'>{name.trim().charAt(0)}</p>
            </div>

            <div >
            <div className='flex justify-between' >
              <div>
              <p className='font-semibold text-[15px]'>{name}</p>
            <p className='text-[14px] text-neutral-500'>${amount.split('.')[0]} for Allowance ❤️.</p>
            <p className='text-[14px] text-neutral-500'>{time.toLocaleTimeString()}</p>
              </div>
              
            </div>
            </div>
            </div>
            
            <div>
            <p className='text-neutral-500 font-semibold text-[17px]'>${amount.split('.')[0]}</p>
            </div>
           
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page

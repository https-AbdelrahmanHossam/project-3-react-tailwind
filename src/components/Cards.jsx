import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col justify-center items-center p-4 mt-4 rounded-lg hover:scale-105 duration-300 my-8  '>
                <img className='w-20 ml-6 mt-[-3rem] bg-white' src={Single} alt="/" />
                <h2 className='text-2xl font-bold  py-8'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trail</button>
            </div>
            
            <div className='w-full shadow-xl flex flex-col justify-center items-center p-4 mt-4 rounded-lg hover:scale-105 duration-300 my-8 md:my-0 bg-gray-100'>
                <img className='w-20 ml-0 mt-[-3rem] bg-transparent' src={Double} alt="/" />
                <h2 className='text-2xl font-bold  py-8'>Partnership</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '> Send up to 2 GB</p>
                </div>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-[#000300]'>Start Trail</button>
            </div>

            <div className='w-full shadow-xl flex flex-col justify-center items-center p-4 mt-4 rounded-lg hover:scale-105 duration-300 md:my-8'>
                <img className='w-20  mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold  py-8'>Group Account</h2>
                <p className='text-4xl font-bold'>$149</p>
                <div className='font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 '>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '> Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trail</button>
            </div>
        </div>

    </div>
  )
}

export default Cards

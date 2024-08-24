import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'



export const Course = () => {
    const[book , setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
               const res= await axios.get("http://localhost:4001/book")
               setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
    <div className='pt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500 font-semibold'>Here! :)</span></h1>
        <p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, porro tempora. Quae, maiores. Aliquid magnam minus porro et, hic sequi deleniti eaque eum ex veritatis. Officia totam doloremque, soluta maiores aspernatur praesentium itaque natus hic, voluptates animi numquam nostrum aliquam ipsum id enim perferendis dicta ipsa magni neque expedita sit.</p>
        <Link to='/'>
        <button className='bg-pink-500 py-2 px-4 rounded-md text-white hover:bg-pink-700 transition-all ease-in-out mt-6 hover:scale-105'> Back</button>
        </Link>
    </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
        {
            book.map((item)=>{
                return(
                    <Card item={item} key={item.id}/>
                )
            })
        }
        </div>
   </div>
   </>
  )
}

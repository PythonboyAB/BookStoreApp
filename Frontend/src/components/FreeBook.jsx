import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"
import { Card } from './Card';



export const FreeBook = () => {
  const[book , setBook]=useState([])
  useEffect(()=>{
      const getBook=async()=>{
          try {
             const res= await axios.get("http://localhost:4001/book")
             setBook(res.data.filter((data)=> data.price===0))
          } catch (error) {
              console.log(error)
          }
      }
      getBook();
  },[])       
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='font-semi-bold text-xl pb-2'>Free Offered courses</h1>
      <p>Discover a range of free courses tailored to enhance your skills. From programming to design, explore valuable learning opportunities and start expanding your knowledge today. !</p>
    </div>
   <div >
   <Slider {...settings}>
        {book.map((item)=>{
          return (
          <Card item={item} key={item.id}/>
        )})}
      </Slider>
   </div>
   </div>
    </> 
  )
}

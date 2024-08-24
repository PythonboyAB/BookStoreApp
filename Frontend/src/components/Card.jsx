import React from 'react'

export const Card = ({item}) => {
    
  return (
    <>
    <div className="mt-4 my-3 p-3">
    <div className="card bg-base-100  md:w-92  shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img class="w-full h-60 object-fill"
      src={item.image}
      alt="Book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name.length>9? item.name.slice(0,8)+"...":item.name}
      <div className="badge badge-secondary">{item.category.length > 10 ? item.category.slice(0, 6) + '...' : item.category}</div>
    </h2>
    <p>{item.title.length>40?item.title.slice(0,40)+"...":item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline"> ${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-3 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

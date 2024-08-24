import React from 'react'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import { Login } from './Login'
import { useForm } from 'react-hook-form';
import axios from "axios"
import toast from 'react-hot-toast';

export const Signup = () => {

  const location= useLocation();
  const navigate=useNavigate()
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = async(data) => {
    const userInfo ={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }

  await axios.post("http://localhost:4001/user/signup",userInfo)
  .then((res)=>{
    console.log(res.data)
    if(res.data){
      toast.success("Signup successfully");
      navigate(from, {replace:true});
    }
    localStorage.setItem("Users", JSON.stringify(res.data.user));
  }).catch((err)=>{
    if(err.response){
      console.log(err);
      toast.success(err.response.data.message);

    }
  });}

  return (
    <div className="dark:-bg-slate-900">
    <div className='flex h-screen items-center justify-center '>
        <div className="w-[600px] ">
  <div className="modal-box dark:bg-slate-800 dark:text-white">
    <form method='dialog' onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    {/* ####################################### Email  ####################### */}
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type="text" placeholder='enter your full name' className='  w-80 px-3 border rounded-md outline-none focus:bg-slate-600' 
        {...register("fullname", { required: true })}
         />
        
        {errors.fullname && <p className="text-red-500">Name is required</p>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='enter your email' className=' w-80 px-3 border rounded-md outline-none focus:bg-slate-600' 
        {...register("email", { required: true })}/>
        
        {errors.email && <p className="text-red-500">Email is required</p>}
    </div>
{/* ####################################### Password  ####################### */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='enter your password' className=' w-80 px-3 border rounded-md outline-none focus:bg-slate-600' 
        {...register("password", { required: true })}/>
        
        {errors.password && <p className="text-red-500">Password is required</p>}
    </div>
    {/* ####################################### Button  ####################### */}
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-200'>Signup</button>
        <p>Have account <button className='text-blue-600 underline cursor-pointer'
        onClick={()=>(document.getElementById("my_modal_3").showModal())}
        >Login</button>
        <Login/>
        </p>
    </div>
    </form>
  </div>
</div>

    </div>
    </div>
  )
}

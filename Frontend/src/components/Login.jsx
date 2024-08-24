import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = async(data) => {
    const userInfo ={
      email:data.email,
      password:data.password,
    }

  await axios.post("http://localhost:4001/user/login",userInfo)
  .then((res)=>{
    console.log(res.data)
    if(res.data){
      toast.success("Login successfully");
      

      setInterval(() => {
        document.getElementById("my_modal_3").close()
        window.location.reload();
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }, 1000);
     
    }
  }).catch((err)=>{
    if(err.response){
      console.log(err)
      toast.error(err.response.data.message);

      setInterval(() => {
        
      }, 2000);

    }
  });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close modal button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=> document.getElementById("my_modal_3").close()}>✕</Link>
            {/* Header */}
            <h3 className="font-bold text-lg">Login</h3>
            
            {/* Email Field */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder='enter your email'
                className='w-80 px-3 border rounded-md outline-none focus:bg-slate-600 dark:bg-slate-800 dark:text-white '
                {...register("email", { required: true })}
              />
              {/* Display error message if email is required */}
              {errors.email && <p className="text-red-500">Email is required</p>}
            </div>
            
            {/* Password Field */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder='enter your password'
                className='w-80 px-3 border rounded-md outline-none focus:bg-slate-600 dark:bg-slate-800 dark:text-white '
                {...register("password", { required: true })}
              />
              {/* Display error message if password is required */}
              {errors.password && <p className="text-red-500">Password is required</p>}
            </div>
            
            {/* Submit Button */}
            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-200'
              >
                Login
              </button>
              <p>Not registered? <Link to="/signup" className='text-blue-600 underline cursor-pointer'>Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

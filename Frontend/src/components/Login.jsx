import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close modal button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            {/* Header */}
            <h3 className="font-bold text-lg">Login</h3>
            
            {/* Email Field */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder='enter your email'
                className='w-80 px-3 border rounded-md outline-none focus:bg-slate-100'
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
                className='w-80 px-3 border rounded-md outline-none focus:bg-slate-100'
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

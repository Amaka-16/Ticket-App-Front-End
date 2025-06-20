import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import apiClient from '../../apiclient';
import MyButton from '../../reusables/button';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
         const response = await apiClient.post('/user/login', formData);
         const token = response.data.token;

         localStorage.setItem('token', token);
         toast.success("Login successful!");
         setTimeout(() => {
           navigate('/home');
         }, 1500);
       } catch (error) {
         toast.error(error.response?.data?.message || 'Login Failed. Please try again!');
       }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-indigo-300 px-4">
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-md p-10 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl">
         <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-700 text-center">Login to book a ticket</h2>
          <input 
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="mb-5 p-4 w-full border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-400 text-gray-800 transition-all duration-200"
         />

          <input 
           type="password"
           name="password"
           onChange={handleChange}
           placeholder="Password"
           className="mb-6 p-4 w-full border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-gray-400 text-gray-800 transition-all duration-200"
           />
              <MyButton title="Login" type="submit"/>
        
           <span  className="text-gray-600 text-sm mt-6 block text-center">
              Don't have an account yet?
               <Link to="/sign-up" className="font-medium text-sm ml-1 text-indigo-600 hover:text-indigo-800 transition">Sign-up</Link>
           </span>
           </form>
        </div>
    );
}
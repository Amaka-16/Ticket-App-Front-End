import { useState } from 'react';
import apiClient from '../../apiclient';
import { Link, useNavigate } from 'react-router-dom';
import MyButton from '../../reusables/button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
     fullName: '',
     email: '',
     phoneNumber: '',
     gender: '',
     password: '',
     passwordConfirm: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]:  e.target.value });
  }

  const handleSubmit = async (e) => {
     e.preventDefault();

     try {
       const response = await apiClient.post('/user/signup', formData);

       // Show success message 
       toast.success('Signup successfully! Redireting to login...');

       // Redirect to login afer 1.5 seconds 
        setTimeout(() => {
          navigate('/login');
        }, 1500);
     } catch (error) {
      // handling error 
       const errorMessage = error.response?.data?.message || 'Invalid credentials. Please try again';
       toast.error(errorMessage);
     }
  }


    return (
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-indigo-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Create Your Account
        </h2>

        <p className="text-gray-600 text-sm mb-8 text-center">
          Sign up to book your tickets with us!
        </p>

        
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type={key.toLowerCase().includes('password') ? 'password' : 'text'}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            placeholder={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} // prettify placeholder
            className="mb-4 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-gray-400 transition"
            required
          />
        ))}

        <MyButton title="Sign Up" type="submit" />

        <p className="mt-6 text-gray-600 text-sm text-center">
          Already have an account?
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-800 ml-1">Login</Link>
        </p>
      </form>
    </div>
    );
}
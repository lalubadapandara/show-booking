import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      console.log(response.data);

      
      navigate("/");

    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Invalid Credentials");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white w-full max-w-md p-8 rounded-xl shadow-lg'>

        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          Sign In
        </h2>

        <form onSubmit={handleSubmit}>

          <div className='mb-4'>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder='you@example.com'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-600 mb-1'>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder='Enter your password'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        
<p className="text-center text-gray-600 mt-4">
  Don't have an account?{" "}
  
  
  <span
    onClick={() => navigate("/UserRegister")}
    className="text-blue-600 hover:underline cursor-pointer"
  >
    Sign Up
  </span>
</p>


      </div>
    </div>
  );
};

export default Login;

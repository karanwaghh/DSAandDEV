import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../common/Spinner'
import {login} from "../../services/operations/authAPIs"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {loading}=useSelector((state)=>(state.auth));

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username,password,navigate));
  };


  return (
    <div className="min-h-screen max-w-maxContent bg-gray-700 flex items-center justify-center p-2 sm:p-6 lg:p-8">
    {
            loading ? 
            (
                <Spinner/>
            ):(
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden p-2">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-gray-900 p-8 md:p-12 flex items-center justify-center rounded-lg">
            <div className="text-white space-y-8 w-full max-w-md">
              <h2 className="text-4xl font-bold text-center md:text-left">Get Started</h2>
              <button className="w-full py-2 px-4 border border-white rounded-md text-white hover:bg-slate-900 transition duration-300">
                Sign in with Google+
              </button>
              <button className="w-full py-2 px-4 border border-white rounded-md text-white hover:bg-slate-900 transition duration-300">
                Sign in with Facebook
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-between">
            <div className="max-w-md mx-auto w-full">
              <h2 className="text-3xl text-slate-700 font-bold mb-4 text-center md:text-left ">Log In</h2>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="username" className="sr-only">Username</label>
                  <input
                    id="username"
                    type="text"
                    required
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    type="password"
                    required
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                 className="bg-blue-300 text-black px-4 py-2 rounded-md flex justify-center font-bold mt-4 hover:bg-blue-500 hover:text-white w-full "
                >
                  Sign In
                </button>
              </form>
              <div className="mt-6 flex flex-col sm:flex-row justify-between text-sm">
                <Link to="/forgot-password" className="text-blue-600 hover:underline mb-2 sm:mb-0 hover:cursor-pointer">Forgot Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default Login;
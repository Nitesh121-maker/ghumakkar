import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden">
        {/* Pattern Circles */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full transform -translate-x-8 -translate-y-8 rotate-45"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full transform translate-x-8 translate-y-8 rotate-45"></div>

        <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden">
            {/* Background Image and Welcome Message */}
            <div className="flex w-80vw h-40vh relative">
                <div className=" inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://source.unsplash.com/1200x800/?travel')" }}>
                    <div className="inset-0 bg-opacity-75 "></div>
                    <div className="z-10 text-white text-center">
                        <h1 className="text-4xl font-bold mb-4">Weaver's Way: Connecting hearts, hands, and cultures.</h1>
                        <p className="text-lg">Welcome to the journey.</p>
                    </div>
                </div>
            </div>

            {/* Login Form Container */}
            <div className="flex w-80vw h-40vh relative">
                <div className="relative bg-white w-full p-8 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-8 z-20 overflow-hidden">
                    {/* Login Form */}
                    <form className="w-full">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input type="password" id="password" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Login</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Login;

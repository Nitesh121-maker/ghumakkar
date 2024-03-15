import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
      <div className=" p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold mb-1">Password</label>
            <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

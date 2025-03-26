<<<<<<< HEAD
import React from 'react';

const UserRegistrationPage = () => {
  return (
    <div className="min-h-screen bg-white  flex items-center justify-center">
      <div className="bg-gradient-to-br from-blue-400 to-purple-1000 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome</h2>
        <h4 className="text-1xl font-bold mb-2 text-center">Registar With Email</h4>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold mb-2">Username</label>
            <input type="text" id="username" name="username" className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Register</button>
        </form>
        <p className="text-sm text-gray-600">Already have an account? <a href='/login' className="text-blue-500">Login</a></p>
      </div>
    </div>
  );
}

export default UserRegistrationPage;
=======
import React from 'react';

const UserRegistrationPage = () => {
  return (
    <div className="min-h-screen bg-white  flex items-center justify-center">
      <div className="bg-gradient-to-br from-blue-400 to-purple-1000 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome</h2>
        <h4 className="text-1xl font-bold mb-2 text-center">Registar With Email</h4>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold mb-2">Username</label>
            <input type="text" id="username" name="username" className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Register</button>
        </form>
        <p className="text-sm text-gray-600">Already have an account? <a href='/login' className="text-blue-500">Login</a></p>
      </div>
    </div>
  );
}

export default UserRegistrationPage;
>>>>>>> 3255247 (NS_COMMIT 00:04 27-03-25 Error: ' can be escaped with &apos)

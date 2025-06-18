import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm , setSignInForm] = useState(true)

  const toggleSignInForm = () => {
      setSignInForm(!signInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_small.jpg"
          alt="bg-image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg ">
        <h1 className="font-bold text-3xl py-4">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!signInForm && <input
          type="text"
          placeholder="Full name"
          className="p-3 my-6 w-full border rounded-sm"
        />}
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 my-6 w-full border rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-6 w-full border rounded-sm"
        />
        <button className=" p-2 my-6 bg-red-600 w-full cursor-pointer hover:bg-red-700 border-0 rounded-sm">
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {signInForm ? "New to Netflix? " : "Already Registered? "}
          <span
            className="cursor-pointer hover:text-gray-300 "
            onClick={toggleSignInForm}
          >
            {signInForm ? "Sign Up " : "Sign In "}
          </span>
          Now
        </p>
      </form>
    </div>
  );
};

export default Login;
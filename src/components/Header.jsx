import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSilce";
import { LOGO } from "../utils/contants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubsribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <header
      className={`absolute w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black bg-opacity-95" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-2">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center">
          <img
            className="w-24 md:w-32 lg:w-44 mr-4 md:mr-8"
            src={LOGO}
            alt="Netflix Logo"
          />

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-6">
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-medium hover:text-gray-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white">
                  TV Shows
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white">
                  New & Popular
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white">
                  My List
                </a>
              </li>
              <li className="hidden lg:block">
                <a href="#" className="text-gray-300 text-sm hover:text-white">
                  Browse by Languages
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-2 text-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Right side - User controls */}
        {user && (
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-white hover:text-gray-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Notification Bell */}
            <button className="hidden sm:block text-white hover:text-gray-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* User Profile */}
            <div className="relative group">
              <div className="flex items-center cursor-pointer">
                <img
                  className="w-8 h-8 rounded-md"
                  src={
                    user.photoURL ||
                    "https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                  }
                  alt="Profile"
                />
                <svg
                  className="w-4 h-4 text-white ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded shadow-xl border border-gray-700 invisible group-hover:visible transition-all duration-300">
                <div className="py-2 px-4 text-white text-sm">
                  <p className="mb-1">{user.displayName || user.email}</p>
                  <button
                    onClick={handleSignOut}
                    className="text-red-600 hover:underline font-medium mt-2"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu - Shown when menu button is clicked */}
      {showMenu && (
        <nav className="md:hidden bg-black bg-opacity-90 border-t border-gray-800">
          <ul className="py-3 px-4">
            <li className="py-2">
              <a href="#" className="text-white text-sm font-medium">
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-300 text-sm">
                TV Shows
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-300 text-sm">
                Movies
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-300 text-sm">
                New & Popular
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-300 text-sm">
                My List
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-300 text-sm">
                Browse by Languages
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

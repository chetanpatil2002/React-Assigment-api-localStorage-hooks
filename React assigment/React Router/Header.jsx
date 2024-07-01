import React from "react";
// import { NavLink } from "react-router-dom";

export default function Header({ isLoggedIn, handleLoginLogout }) {
    return (
      <nav className="bg-blue-500 text-white p-4 flex justify-between items-center text-2xl">
        <div>Navigation</div>
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded"
          onClick={handleLoginLogout}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </nav>
    );
  };
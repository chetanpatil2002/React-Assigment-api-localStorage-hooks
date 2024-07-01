import React, { useState } from 'react'
import Header from './Header'
import Login from './Login'
import Logout from './Logout'
import Footer from './Footer'

export default function ReactRouter() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={isLoggedIn} handleLoginLogout={handleLoginLogout} />
      <main className="flex-grow">
        {isLoggedIn ? <Logout/> : <Login />}
      </main>
      <Footer />
    </div>
  );
}

import React, { useEffect, useState } from 'react'

export default function MouseMovement() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div className="relative w-full h-screen">
        <div
          className="absolute bg-blue-500 rounded-full"
          style={{
            width: '100px',
            height: '100px',
            top: position.y - 25,
            left: position.x - 25,
          }}
        ></div>
      </div>
    );
  };
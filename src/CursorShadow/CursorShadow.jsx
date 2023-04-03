import React, { useState, useEffect } from 'react';
import './CursorShadow.css';

const CursorShadow = ({ copiedText }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorCircle, setCursorCircle] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', updateCursorPosition);
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    const updateCircle = (e)=>{
      setCursorCircle({ x: e.clientX, y: e.clientY });
      const cursorCircle = document.getElementById('cursor-circle');
      cursorCircle.style.display = 'block';
      cursorCircle.style.left = `${e.clientX}px`;
      cursorCircle.style.top = `${e.clientY}px`;
      setTimeout(() => {
        cursorCircle.style.display = 'none';
      }, 150);
    }
    document.addEventListener('click',updateCircle);
    return()=>{
      document.removeEventListener('click',updateCircle)
    }
  }, []);

  return (
    <>
      <div
        className="cursor-shadow"
        style={{ left: `${cursorPosition.x + 10}px`, top: `${cursorPosition.y + 10}px` }}
      >
        {copiedText}
      </div>
      <div
        className="cursor-circle"
        id="cursor-circle"
      ></div>
    </>
  );
};

export default CursorShadow;
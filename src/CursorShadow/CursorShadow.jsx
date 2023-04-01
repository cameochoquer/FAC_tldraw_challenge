import React, { useState, useEffect } from 'react';
import './CursorShadow.css';

const CursorShadow = ({ copiedText }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="cursor-shadow"
      style={{ left: `${cursorPosition.x + 10}px`, top: `${cursorPosition.y + 10}px` }}
    >
      {copiedText}
    </div>
  );
};

export default CursorShadow;


import React, { useRef, useState, useEffect } from 'react'
import './App.css'
import Stickers from './stickers'

const App = () =>{

  const handlePaste = (event) => {
     if (event.target.closest('button')|| !navigator.clipboard) {
      return;
    }

    navigator.clipboard.readText()
    .then((text) => {
        if (text !== '') {
      const newSticker = document.createElement('div');
      newSticker.innerText = text;
      newSticker.style.position = 'absolute';
      newSticker.style.left = `${event.clientX}px`;
      newSticker.style.top = `${event.clientY}px`;
      document.body.appendChild(newSticker);
      navigator.clipboard.writeText('');
        }
    });
  };


   useEffect(() =>{
    document.body.addEventListener('click', handlePaste );
    return () => {
        document.body.removeEventListener('click', handlePaste)
    }
   });
  return (
    <div>
      <footer>
        <Stickers stickerEmoji={'🍏'} />
        <Stickers stickerEmoji={'🍋'} />
        <Stickers stickerEmoji={'🍊'} />
      </footer>
    </div>
  );
}


export default App

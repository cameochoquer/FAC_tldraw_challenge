import React, { useRef, useState, useEffect } from 'react'
import Stickers from './stickers'
import CursorShadow from './CursorShadow/CursorShadow'
import './index.css'
import './App.css'

// import Unicorn from './UnicornSticker/UnicornSticker'

const App = () =>{
    const [clipboardText, setClipboardText] = useState('');

     const handleEmojiSelected = (emoji) => {
    setClipboardText(emoji);
  };

  const handlePaste = (event) => {
     if (event.target.closest('footer')|| !navigator.clipboard){
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

        let timer;
        newSticker.addEventListener('mousedown', (e) => {
          timer = setTimeout(() => {
            newSticker.remove();
          }, 500); // Adjust the threshold (in milliseconds) as needed
        });

        newSticker.addEventListener('mouseup', (e) => {
          clearTimeout(timer);
        });

      document.body.appendChild(newSticker);
      navigator.clipboard.writeText('');
      setClipboardText(''); // Clear the clipboard text state
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
            <CursorShadow copiedText={clipboardText} />

      <footer>
        <Stickers stickerEmoji={'⚛️'} onEmojiSelected={handleEmojiSelected}/>
        <Stickers stickerEmoji={'👩🏼‍🎤'} onEmojiSelected={handleEmojiSelected}/>
        <Stickers stickerEmoji={'🦄'} onEmojiSelected={handleEmojiSelected}/>
        <Stickers stickerEmoji={'🌈'} onEmojiSelected={handleEmojiSelected}/>

      </footer>
    </div>
  );

 
}

export default App

import React, { useState, useEffect } from 'react'
import Stickers from './stickers'
import CursorShadow from './CursorShadow/CursorShadow'
import './index.css'
import './App.css'

const App = () =>{
  const [stickerEmoji, setStickerEmoji] = useState('');
  const [clipboardText, setClipboardText] = useState('');

  const handleEmojiSelected = (emoji) => {
    setStickerEmoji(emoji);
  };

  const handlePaste = (event) => {
    if (event.target.closest('footer') || !navigator.clipboard) {
      return;
    }
    navigator.clipboard.readText()
      .then((text) => {
        if (text === stickerEmoji && text !== '') {
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

  useEffect(() => {
    setClipboardText('')
        setClipboardText(stickerEmoji)
    document.body.addEventListener('click', handlePaste);
    return () => {
      document.body.removeEventListener('click', handlePaste)
    }
  }, [stickerEmoji]);

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
import React, { useRef, useState, useEffect } from 'react'
import './App.css'
import Stickers from './stickers'

const App = () =>{
  return (
    <div>
      <h1>Welcome to my app</h1>
      {/* <MyButton onClick={() => handleCopy('🍏')} stickerEmoji={'🍏'}/> */}
      <footer>
        <Stickers stickerEmoji={'🍏'} />
        <Stickers stickerEmoji={'🍋'} />
        <Stickers stickerEmoji={'🍊'} />
      </footer>
     
    </div>
  );
}


export default App

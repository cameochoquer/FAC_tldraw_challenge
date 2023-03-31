import React, { useRef, useState, useEffect } from 'react'
import './App.css'
import Stickers from './stickers'

const App = () =>{
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

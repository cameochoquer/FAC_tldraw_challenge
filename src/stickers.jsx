import React, { useRef, useState, useEffect } from 'react';
import CursorShadow from './CursorShadow/CursorShadow';

const Stickers = (props) => {
  const [copiedText, setCopiedText] = useState('');
  const [showShadow, setShowShadow] = useState(false);

  const copySticker = () => {
    navigator.clipboard.writeText(props.stickerEmoji);
    props.onEmojiSelected(props.stickerEmoji);
  };
  
  return (
    <div>
      <button onClick={copySticker}>{props.stickerEmoji} </button>
      
    </div>
  );
};

export default Stickers;



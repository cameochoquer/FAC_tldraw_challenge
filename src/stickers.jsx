import React, { useRef, useEffect } from 'react';

const Stickers = (props) => {
  const stickerRef = useRef(null);
//   const [currentSticker, setCurrentSticker] = useState('');

  const copySticker = () => {
    // setCurrentSticker(props.stickerEmoji);
    navigator.clipboard.writeText(props.stickerEmoji);
};


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
    document.addEventListener('click', handlePaste );
    return () => {
        document.removeEventListener('click', handlePaste)
    }
   });

  return (
    <div>
      <button onClick={copySticker}>{props.stickerEmoji}</button>
    </div>
  );
};

export default Stickers;
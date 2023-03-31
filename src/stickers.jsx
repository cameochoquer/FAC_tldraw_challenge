import React, { useRef, useEffect } from 'react';

const Stickers = (props) => {
  const stickerRef = useRef(null);

  const copySticker = () => {
    navigator.clipboard.writeText(props.stickerEmoji);
};
  return (
    <div>
      <button onClick={copySticker}>{props.stickerEmoji}</button>
    </div>
  );
};

export default Stickers;
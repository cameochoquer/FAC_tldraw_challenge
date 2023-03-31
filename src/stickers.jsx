import React, { useEffect } from 'react';

const Stickers = (props) => {
  const copySticker = () => {
    navigator.clipboard.writeText(props.stickerEmoji);
    const svgCursor = createSvgCursor(props.stickerEmoji);
    document.body.style.cursor = svgCursor;
  };

  const createSvgCursor = (emoji) => {
    const unicode = emoji.codePointAt(0).toString(16).toUpperCase();
    return `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='50' font-size='50'>&#x${unicode};</text></svg>"), auto`;
  };


  
  return (
    <div>
      <button onClick={copySticker}>{props.stickerEmoji}</button>
    </div>
  );
};

export default Stickers;
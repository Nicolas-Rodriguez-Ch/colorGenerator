import { useState } from 'react';

const useGenerateRandomColor = () => {
  const [color, setColor] = useState('');

  const generateColor = () => {
    setColor(
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, '0')
    );
  };

  return { color, generateColor };
};

export default useGenerateRandomColor;

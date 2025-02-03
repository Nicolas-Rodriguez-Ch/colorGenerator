import { useState } from 'react';
import './App.css';
import useGenerateRandomColor from './hooks/useGenerateRandomColor';

function App() {
  const { color, generateColor } = useGenerateRandomColor();
  const [generatedColors, setGeneratedColors] = useState<string[]>([]);
  console.log('🚀 ~ App ~ generatedColors:', generatedColors);
  const generateBaseColor = () => {
    generateColor();
    setGeneratedColors((prev) => [...prev, color]);
  };

  return (
    <>
      <div
        className={`h-dvh w-full flex justify-center items-center`}
        style={{ backgroundColor: '#' + color }}
      >
        <button
          className='p-10 rounded-xl text-2xl bg-teal-800 cursor-pointer'
          onClick={generateBaseColor}
          style={{
            backgroundImage:
              'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
          }}
        >
          Generate Random Color!
        </button>
        <>
          {generatedColors !== null ? (
            <div>Your generated colors</div>
          ) : (
            <div>You haven't generated any colors yet</div>
          )}
        </>
      </div>
    </>
  );
}

export default App;

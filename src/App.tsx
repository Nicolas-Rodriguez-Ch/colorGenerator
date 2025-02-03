import { useEffect, useState } from 'react';
import './App.css';
import useGenerateRandomColor from './hooks/useGenerateRandomColor';

function App() {
  const { color, generateColor } = useGenerateRandomColor();
  const [generatedColors, setGeneratedColors] = useState<string[]>([]);
  useEffect(() => {
    if (color) {
      setGeneratedColors((prev) => [...prev, color]);
    }
  }, [color]);
  const generateBaseColor = () => {
    generateColor();
  };

  return (
    <>
      <div
        className='h-dvh w-full flex flex-col gap-4 justify-center items-center'
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
          {generatedColors.length > 0 ? (
            <div className='flex flex-col'>
              <div>Your generated colors: </div>
              {generatedColors.map((color) => {
                return (
                  <span
                    key={color}
                    style={{ backgroundColor: '#' + color }}
                    className='rounded-xl p-4 m-2 font-extrabold'
                  >
                    #{color}
                  </span>
                );
              })}
            </div>
          ) : (
            <div>You haven't generated any colors yet</div>
          )}
        </>
      </div>
    </>
  );
}

export default App;

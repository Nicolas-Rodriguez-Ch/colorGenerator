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
        <div>
          {generatedColors.length > 0 ? (
            <div className='flex flex-col items-center'>
              <div className='font-bold'>Your generated colors:</div>
              <div
                className='grid gap-2'
                style={{
                  gridTemplateColumns:
                    generatedColors.length > 5
                      ? 'repeat(9, 1fr)'
                      : 'repeat(1, 1fr)',
                }}
              >
                {generatedColors.map((color) => (
                  <span
                    key={color}
                    style={{ backgroundColor: '#' + color }}
                    className='rounded-xl p-4 m-2 font-extrabold'
                  >
                    #{color}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className='font-bold'>
              You haven't generated any colors yet
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

import './App.css';
import useGenerateRandomColor from './hooks/useGenerateRandomColor';

function App() {
  const { color, generateColor } = useGenerateRandomColor();
  console.log('🚀 ~ App ~ color:', color);
  
  return (
    <>
      <div
        className={`h-dvh w-full bg-blue-900 flex justify-center items-center`}
      >
        <button
          className='p-10 rounded-xl text-2xl bg-teal-800 cursor-pointer'
          onClick={generateColor}
        >
          Generate Random Color!
        </button>
      </div>
    </>
  );
}

export default App;

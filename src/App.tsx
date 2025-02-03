import './App.css';
import useGenerateRandomColor from './hooks/useGenerateRandomColor';

function App() {
  const { color, generateColor } = useGenerateRandomColor();
  return (
    <>
      <div
        className={`h-full w-full bg-blue-900 flex justify-center items-center`}
      >
        aqui va el bg
      </div>
    </>
  );
}

export default App;

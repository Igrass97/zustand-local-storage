import logo from './logo.svg';
import './App.css';
import { useReactiveLocalStorage } from './useLocalStorage';

const MyComp = ({ color = 'red' }) => {
  const [bears, setBears] = useReactiveLocalStorage('bears')


  return <div style={{ border: `1px solid ${color}`, width: 300, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>{bears}<button style={{ display: 'block' }} onClick={() => setBears(+bears + 1)}>Increase bears</button></div>
}

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3rem', width: 700 }}>
      <MyComp />
      <MyComp color="blue" />
    </div>
  );
}

export default App;

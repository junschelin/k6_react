import './App.css';
import HelloCssTailWind from './02/HelloCssTailWind';

function App() {
  const apikey = process.env.REACT_APP_API_KEY ;
  console.log(apikey)

  return ( // return 문 안에는 jsx 문법을 사용
    <div>
      <HelloCssTailWind />
    </div>
  );
}

export default App;

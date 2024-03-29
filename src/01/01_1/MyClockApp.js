import './App.css';
import MyClock from './01/01_1/MyClock'

function App() {
  return ( // return 문 안에는 jsx 문법을 사용
    <> {/* fragment */}
    <div className="App">
        <MyClock />
    </div>
    </>
  );
}

export default App;

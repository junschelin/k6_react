import './App.css';
import MainHeader from './MainHeader';
import Hello from './Hello';

function App() {
  return ( // return 문 안에는 jsx 문법을 사용
    <> {/* fragment */}
    <div className="App">
        <MainHeader />
        <Hello />
        <Hello />
        <Hello />
    </div>
    <div>402호</div>
    </>
  );
}

export default App;

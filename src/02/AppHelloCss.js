import './App.css';
import './02/HelloCss.css'
import HelloCss from './02/HelloCss';

function App() {

  return ( // return 문 안에는 jsx 문법을 사용
    <> {/* fragment */}
    <div className="App">
        <HelloCss />
    </div>
    </>
  );
}

export default App;

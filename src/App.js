import './App.css';
// import MyDiv1 from './03/03_1/MyDiv1';
import { DiApple } from "react-icons/di";
// import { DiPython } from "react-icons/di";
// import MyListMain from "./04/MyListMain"
import BoxOffice from './10/BoxOffice';
// import Lotto from './06/Lotto';
// import FoodMain from './07/FoodMain';
// import MyClock from './08/MyClock';
import TrafficMain from './09/TrafficMain';
import RefVal from './10/RefVal'
import RefInput from './10/RefInput';
import GalleryMain from './11/GalleryMain';
import Festival from './12/Festival';

function App() {
  const apikey = process.env.REACT_APP_API_KEY;
  console.log(apikey)

  return ( // return 문 안에는 jsx 문법을 사용
    <div className='flex flex-col 
                      w-full max-w-screen-xl
                      h-screen
                      mx-auto
                      overscroll-y-auto'>
      <header className='flex justify-between
       h-20 p-10 
       text-xl font-bold text-cyan-200
       bg-slate-900
       items-center'>
        <div className='color'>리액트실습</div>
        <div><DiApple className='text-3xl' /></div>
      </header>
      <main className='grow flex flex-col items-center justify-center'>
        {/* <MyListMain /> */}
        {/* <BoxOfficeTb /> */}
        {/* <Lotto /> */}
        {/* <FoodMain /> */}
        {/* <MyClock /> */}
        {/* <TrafficMain /> */}
        {/* <RefVal /> */}
        {/* <RefInput /> */}
        {/* <BoxOffice /> */}
        {/* <GalleryMain /> */}
        <Festival />
      </main>

      <footer className='flex items-center justify-center
       bg-slate-200
       w-full
       h-32
       text-xl font-bold text'>
        <p>ⓒ 2024 junschelin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

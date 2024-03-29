
import '../App.css';
import logo from "../logo.svg"
import {DiApple} from "react-icons/di";
import {DiPython} from "react-icons/di";

function HelloCssTailWind() {
  const apikey = process.env.REACT_APP_API_KEY ;
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
      <main className='flex flex-col items-center justify-center
                       w-full max-w-screen-xl mx-auto
                       h-full'>
        <img src={logo} className='App-logo' alt='logo'/>
        <DiPython className='text-8xl ml-1 mt-20'/>Dev.
      </main>

      <footer className='flex items-center justify-center
                         bg-slate-200
                         w-full max-w-screen-xl
                         h-32
                         mx-auto
                         overscroll-y-auto
                         text-xl font-bold text'>
        <p>ⓒ 2024 junschelin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HelloCssTailWind;

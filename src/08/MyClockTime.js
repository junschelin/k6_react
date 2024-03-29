import { useState, useEffect } from "react";

function MyClockTime(){
    const [currentTime, setCurrentTime] = useState(new Date());
    const [tm, setTm] = useState(0);

    // 입력 인수는 콜백 함수
    // useEffect는 호출하지 않아도 처음 컴포넌트가 생성될때 최초 1번 실행
    useEffect(()=>{
        const t = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000);
        console.log("[] = > ",currentTime);
        return () => {clearInterval(t)}
    }, []); // [] : 처음 한번은 무조건 실행

    // tm변수가 바뀔 때마다 실행
    useEffect(()=>{    
        console.log("[tm] = > ",currentTime, tm);
    }, [tm]);// [] : dependancy array
          // [] 안의 어떤 변수가 바뀌었을 때 실행될건지 조건 (초기화)
          // 초기화 되는 것도 바뀌었다고 판단함.

    // []없는 경우 : 렌더링이 일어날 때마다 실행
    useEffect(()=>{
        console.log("[]없는 경우 =>", currentTime, tm);
    })

    const date = new Date();
    return(
       <h1 className="flex justify-center font-bold text-xl"> 
            {currentTime && `현재시각 : ${currentTime.toLocaleTimeString()}`}
       </h1>
    );
}

export default MyClockTime
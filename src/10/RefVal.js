import TailButton from "../06/TailButton"
import {useState, useEffect, useRef} from "react"

export default function RefVal() {
    let cnt = 0;                            //컴포넌트변수
    const [stCnt, setStCnt] = useState(0);  //State변수
    const refCnt = useRef(0);               //Ref변수
    // Reffer 변수는 .current 필수! (없으면 오류발생)

    const handleLocal  = () => {
        cnt = cnt + 1;
        console.log('cnt =', cnt)
        //Local 변수
    }
    const handleState = () => {
        setStCnt(stCnt + 1);
        //State 변수는 Setter로 변경!
    }
    const handleRef  = () => {
        //ref 변수는 주로 form 태그의 값을 가져올 때 사용!
        refCnt.current += 1;
        console.log("refCnt.current : " + refCnt.current )
    }

    useEffect(()=>{
        console.log("stCnt = ",stCnt)
    }, [stCnt])

  return (
    <div className="w-11/12 grid grid-cols-3 gap=4">
        
        <div>
            컴포넌트 변수(지역변수) : {cnt}
        </div>
        <div>
            State 변수 : {stCnt}
        </div>
        <div>
            Ref 변수 : {refCnt.current} 
        </div>
        <div>
            <TailButton caption = "컴포넌트 변수" color = "blue" handleClick={handleLocal}/>
        </div>
        <div>
            <TailButton caption = "State 변수" color = "blue" handleClick={handleState}/>
        </div>
        <div>
            <TailButton caption = "Ref 변수" color = "blue" handleClick={handleRef}/>
        </div>

    </div>
  )
}

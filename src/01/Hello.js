import './Hello.css'
function Hello() {
    const currentTime = new Date();
    let n = Math.floor(Math.random() * 100) + 1;
    const st1 = {
        backgroundColor : "darkblue", 
        color : "white"
    }
    
    let x ;
    // let s = '';
    // if (n%2 === 0) s = "짝수";
    // else s = "홀수";

    return(
        <>
        <p>
            {currentTime.toLocalTimeString}
        </p>
        {/* <h1>Hello {n}</h1> */}
        <h1>
            <span style={st1}>Hello {n} </span>
            <span style={{display:"incline-flex", margin:"10px"}}>Hello </span>
            {n < 10 && "0"}{n} {/**/}
        {/*    {n<10? `0{n}` : n} 삼항연산자로 표현      */}
            {/* {s} */}
            {/* 조건부 랜더링 */}
            {n % 2 === 0? "짝수" : "홀수"} {/*삼항연산*/}
            {n % 2 === 0
            ? <span style={{color:"red"}}>짝수</span>
            : <span style={{color:"blue"}}>홀수</span>
            }
            {n % 2 === 0 && "🍎"} {/*조건이 참일 때만 값 부여 가능*/}
            {n % 2 === 1 && "🍔"}
            <p>{ x || "x는 undefined입니다."}</p> {/*거짓일 때 오른쪽 값, 참일 때 x값 출력*/}
        

        
        </h1>
        </>
    );
}

export default Hello;


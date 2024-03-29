import BoxOfficeTbody from "../05/05_1/BoxOfficeTbody";
import BoxOfficeInfo from "../05/BoxOfficeInfo";
import { useState, useEffect, useRef } from "react";
import TailInput from "./TailInput";


function BoxOffice() {
    //영화 목록 Restfull 서비스로 가져오기
    const [boxList, setBoxList] = useState();

    //state 변수
    const [selMv, setSelMv] = useState("영화를 선택하세요.");
    // setSelMv : useState 함수는 배열을 반환. 
    // 이 배열은 두 개의 요소를 가지며, 첫 번째 요소는 현재 상태 값을 가지고 두 번째 요소는 상태를 업데이트할 수 있는 함수.

    const [trs, setTrs] = useState()

    const handleClick = (mv) => {
        setSelMv(mv)
    }

    useEffect( () => {
        if(!boxList){return }
        let tm = boxList.map(item => 
            <tbody className='h-10 text-center border border-y-stone-1000 border-y-stone-1000 bg-slate-100 text-black font-bold'>
            <tr className='border border-white 
                hover:bg-blue-200 hover:border-1 hover:border-black
                active:bg-white active:border-1 active:border-black'>
                <td className='border-r border-l border-white '>{item.rank}</td>
                <td className='text-left border-r border-l border-white' 
                onClick={()=>{handleClick(item)}}>{item.movieNm}</td>
                <td className='text-right border-r border-l border-white'>{`${parseInt(item.salesAmt).toLocaleString()}원`}</td>
                <td className='text-right border-r border-l border-white'>{parseInt(item.audiAcc).toLocaleString()}명</td>
                <td className='text-center border-r border-l border-white'>{parseInt(item.rankInten) < 0 ? '🔻' : parseInt(item.rankInten) > 0 ? '🔺' : '➖'}</td>
            </tr>
        </tbody>)
        setTrs(tm)
    }, [boxList])


    //ref 변수
    const boxRef = useRef();
    const getData = (dt) =>{
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
        url = `${url}key=${process.env.REACT_APP_MY_KEY}`
        url = url + `&targetDt=${dt}`
        
        //fetch : 비동기방식이라서 .then 필요
        fetch(url)
        .then(resp => resp.json())
        .then(data => setBoxList(data.boxOfficeResult.dailyBoxOfficeList))
        .catch(err => console.log(err))
    }

    const handleSelDate = () => {
        console.log(boxRef.current.value.replaceAll('-',''));
        getData(boxRef.current.value.replaceAll('-',''));
    }


    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="flex">
                <span className="w-4/5 flex justify-start items-center font-bold text-xl">날짜 선택 : </span> 
                <TailInput  type = "date"
                            inputRef = {boxRef}
                            handleChange = {handleSelDate}
                            ph = ""/>
                </div> 
                <table className="w-4/5 border">
                <caption className="text-3xl font-bold mb-3">일일박스오피스 순위</caption>    
                <thead>
                    <tr className = "h-10 text-center bg-blue-900 text-white">
                    <th>순위</th>
                    <th>영화명</th>
                    <th>매출액</th>
                    <th>누적관객수</th>
                    <th>증감율</th>
                    </tr>
                </thead>
                {trs}
                {/* <MyTb mv={myTablesProbs} /> */}
            </table>
            <div className="w-4/5 h-10 text-center flex justify-center items-center text-base text-white bg-blue-900">
                {
                    `[${selMv.movieCd}] ${selMv.movieNm} : 
                    누적 관객수 ${selMv.audiAcc}명`
                }    
                {/* <BoxOfficeInfo selMv={selMv}/> */}
            </div> 
        </div>
  )
}

export default BoxOffice

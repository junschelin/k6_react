import BoxOfficeData from "./BoxOffice.json"
import MyTb from "./MyTb"
import { useState } from 'react';
import BoxOfficeTbody from "./05_1/BoxOfficeTbody";
import BoxOfficeInfo from "./BoxOfficeInfo";



function BoxOfficeTb() {
    const [selMv, setSelMv] = useState("영화를 선택하세요.");
    // setSelMv : useState 함수는 배열을 반환. 
    // 이 배열은 두 개의 요소를 가지며, 첫 번째 요소는 현재 상태 값을 가지고 두 번째 요소는 상태를 업데이트할 수 있는 함수.
    const myTables = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList.map(item => 
        <BoxOfficeTbody mv={item} key = {item.movieCd} setSelMv = {setSelMv}/>
    );
    
    
    const mv = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList

    return (
        <div className="w-full flex flex-col justify-center items-center">
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
                {myTables}
                {/* <MyTb mv={myTablesProbs} /> */}
            </table>
            <div className="w-4/5 h-10 text-center flex justify-center items-center text-base text-white bg-blue-900">
                {/* {
                    `[${selMv.movieCd}] ${selMv.movieNm} : 
                    누적 관객수 ${selMv.audiAcc}명`
                }     */}
                <BoxOfficeInfo selMv={selMv}/>
            </div>
        </div>
  )
}

export default BoxOfficeTb

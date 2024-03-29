import { useEffect } from "react"
import { useState } from "react";
import TrafficNav from "./TrafficNav";
// import DetailInfo from "./DetailInfo";

export default function TrafficMain() {
    // useEffect 인수
    // 1번 : 콜백함수, 2번 : dependency Array, 3번 : 

    // tdata라는 변수
    // setTdata는 tdata변경 함수
    const [tdata, setTdata] = useState();


    // 대분류
    // c1 : 대분류
    const [c1, setC1] = useState();
    // selC1 : 어떤 버튼이 클릭 되었는지 (대분류)
    const [selC1, setSelC1] = useState();


    // 중분류 (대분류가 c1인 것을 필터링해서 가져와라)
    // c2 : 중분류 (대분류가 c1인 것)
    const [c2, setC2] = useState()
    // selC2 : 어떤 버튼이 클릭 되었는지 (중분류)
    const [selC2, setSelC2] = useState()


    const [detail, setDetail] = useState()
    // 상세정보
    const [info, setInfo] = useState()

    // fetch : 비동기 방식
    const getDataFetch = (url) => {
        fetch(url)
        // 데이터가 갔다 오면(응답이 오면)
        .then(resp => resp.json()) //.json()메서드 : json 응답을 js객체로 받아옴 (여기서는 object)
        // json 변환이 끝나고 나면
        .then(data => setTdata(data.data))
        // 오류가 나면
        .catch(err => console.log(err));
        // then chaining
    }

    // 렌더링 되고나서 한번 땡겨옴
    useEffect(()=>{
        // 물음표 앞에까지 `(백틱) 써서 가져오셈
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
        // 페이지 번호에 변수 사용 가능하도록 끊어서 저장
        url = `${url}page=1&perPage=20&`
        // servicekey=
        url = `${url}serviceKey=${process.env.REACT_APP_API_KEY}`
        console.log(url)

        getDataFetch(url)
    }, []);

    // 2번 실행
    // 초기에 useState 정의되지 않았을 때
    // tdata 변경되었을 때
    useEffect(()=>{
        if(!tdata) //undefined : false의 값을 가짐
            return ;
        
        let tm = tdata.map(item => item.사고유형_대분류)
        tm = [...new Set(tm)]
        setC1(tm)
        console.log("tdata:", tm)

    },[tdata]); // tdata가 변경되었을 때

    // c2 불러오기
    useEffect(()=>{
        if(!tdata) //undefined : false의 값을 가짐
            return ;
        
        let tm = tdata.filter(item => item.사고유형_대분류 === selC1)
                      .map(item => item.사고유형_중분류);
        tm = [...new Set(tm)]
        setC2(tm)
        console.log("C2:", c2)
        setInfo(' ')
    },[selC1]); // tdata가 변경되었을 때

    // 상세정보 불러오기
    useEffect(()=>{
        if(!tdata) //undefined : false의 값을 가짐
            return ;
        
        let tm = tdata.filter(item => item.사고유형_대분류 === selC1
                                    &&item.사고유형_중분류 === selC2)

        
        setDetail(tm[0]); 

    },[selC2]); // tdata가 변경되었을 때

    useEffect (() =>{
        if(!tdata) //undefined : false의 값을 가짐
            return ;
        const keyArr = ["사고건수", '사망자수', '중상자수', '경상자수', '부상신고자수'];

        let tm = keyArr.map( k => 
            <div>
                <div className="flex justify-center border border-dashed bg-yellow-200 text-red-700">{k}</div>
                <div className="flex justify-end border border-dashed bg-red-600 text-white">{parseInt(detail[k]).toLocaleString()}</div>
            </div>
            );
            setInfo(tm);
            
    }, [detail]);
  


    return (
     <div className="w-full h-full flex flex-col mt-5
                     justify-start items-center">
            <div className="flex justify-center w-11/12 bg-slate-200">
            {c1 && <TrafficNav title="대분류"
                                category={c1}
                                sel={selC1}
                                setSel={setSelC1} /> }
            </div>

            <div className="flex justify-center w-11/12 bg-slate-200">
            {c2 && <TrafficNav title="중분류"   
                            category={c2}
                            sel={selC2}
                            setSel={setSelC2} /> }
            </div>
            <div className="w-10/12 grid grid-cols-2
                            sm:grid-cols-3
                            md:grid-cols-5 gap-4
                            text-xl font-bold
                            mt-3">
            {info}
            </div>

    </div>
    )
}

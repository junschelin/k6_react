import React from 'react'
import GalleryCard from '../11/GalleryCard'
import { useEffect, useState, useRef } from 'react'


export default function Festival() {
  const keyword = useRef();
  const [tdata, setTdata] = useState();
  const [guname, setGuname] = useState();
  const [opTags, setOPTags] = useState();
  const [tags, setTags] = useState();

  
  // select 값
  const selRef = useRef();

  // select 선택
  const handleGu = () => {

    let tm = tdata.filter(item => item.GUGUN_NM === selRef.current.value)
                  // 이렇게 바로 걸어도 됨.
                  //.map(item =>
                  // <GalleryCard imgUrl = {item.MAIN_IMG_NORMAL}
                  // title = {item.MAIN_TITLE.replace("(한,영,중간,중번,일)","")}
                  // ptitle = {item.TITLE}
                  // ktag = {item.SUBTITLE} />   

    let result = tm.map(item =>
      <GalleryCard imgUrl = {item.MAIN_IMG_NORMAL}
      key = {item.MAIN_TITLE}
      title = {item.MAIN_TITLE.replace("(한,영,중간,중번,일)","")}
      ptitle = {item.TITLE}
      ktag = {item.SUBTITLE} />   
    )

    setTags(result);
  }

  // 부산 축제 데이터 fetch
  useEffect(() => {
    let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?'
    url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`
    url = url + '&pageNo=1&numOfRows=40&resultType=json'
    console.log(url);
    getData(url);
  }, []);

  // 구정보 만들기
  useEffect(() => {
    if (!tdata) return;

    let tm = tdata.map(item => item.GUGUN_NM)
    tm = new Set(tm)
    tm = [...tm].sort()
    setGuname(tm)

  }, [tdata])

  //구 데이터
  useEffect(() => {
    if (!guname) return;

    let gugu = guname.map((item) => 
      <option value={item}>{item}</option>
    );
    setOPTags(gugu);

  }, [guname])



  const getData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.getFestivalKr.item))
      .catch(error => console.log(error))
  }

  return (
    <div className='w-full h-full flex flex-col justify-start items-center'>
      <form className="w-1/3 mx-auto flex flex-row justify-center items-center">
        <label htmlFor="gu" className="mb-2 w-1/3 block text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
        <select id="gu" 
                onChange={handleGu}
                ref={selRef}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option defaultValue>---구선택---</option>
          {opTags}
        </select>
      </form>
      <div  className='mt-2 w-full p-2 gap-4 items-center
                        grid grid-cols-1 md:grid-cols-3 '>
        {tags}
      </div>
    </div>
  )
}

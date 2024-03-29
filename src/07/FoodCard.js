import { useState } from 'react'
import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'

export default function FoodCard({item}) {
    const [isClick,setIsClick] = useState(false)
    let num = item["연락처(대표번호)"]

    const handleClick = () => {
        setIsClick(!isClick)
    }
    
    const fobj = {
        "구분": "광역지원센터",
        "시군구": "부산시",
        "사업장명": "부산광역푸드뱅크",
        "신고기준": "당연",
        "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
        "연락처(대표번호)": "051-791-1377",
        "팩스번호": "051-714-3096",
        "운영주체 분류": "1. 사회복지법인",
        "운영주체명": "부산광역시사회복지협의회"
    }

    const fimg = item["구분"] === "광역지원센터"? busan : item["구분"] === "기초푸드뱅크"? bank : market 
    
  return (
    <div className='w-11/12 h-40 border flex justify-center items-center'>
      <div className='w-1/6 max-w-xl'><img src={fimg} alt="img"/></div>
      <div className='w-5/6 '>
        <h1 className='text-2xl font-bold text-slate-700'>{item["사업장명"]}</h1>
        <h2 className='text-xl font-bold text-slate-500'>{item["운영주체명"]}</h2>
        <h2 className='text-sm font-bold text-slate-400'>{item["사업장 소재지"]}</h2>
        <div className='w-full h-6 text-sm bg-slate-500 text-white font-bold flex items-center
                        mt-5 p-2' onClick={handleClick}>{isClick ? `Tel. ${num}` : ""}</div>

      </div>
    </div>
  )
}

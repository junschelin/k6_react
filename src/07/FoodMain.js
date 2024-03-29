import FoodCard from './FoodCard'
import fdata from './fooddata.json'
import TailButton from '../06/TailButton';
import { useState } from 'react';

export default function FoodMain() {
    let c1 = fdata.map(item => item["운영주체 분류"]);
    c1 = new Set(c1)
    c1 = [...c1]; //... : 전개 연산자
    
    const c1Bts = c1.map(item =>
        <TailButton caption={item} color='blue' handleClick={() => handleList(item)}/>
    )

 
    
    const handleList = (citem) => {
        console.log(citem)
        const tm = fdata.filter(item => item["운영주체 분류"] === citem).map(item => 
                                                                <FoodCard item = {item} key={item["사업장명"]}/>);
        setCards(tm);
    }


    const [cards, setCards] = useState()

    return (
        <div className='w-full h-full flex flex-col justify-start items-center'>
            <div className='w-full flex justify-center items-center bg-blue-100 h-20 mb-5'>
                {c1Bts}
            </div>
            <div className="w-full h-full grid grid-cols-1 
            md:grid-cols-2
            xl:grid-cols-3 gap-2">
                {cards}
            </div>
        </div>
  )
}

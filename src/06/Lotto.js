import React from 'react'
import TailButton from './TailButton'
import TailBall from './TailBall'
import { useState } from 'react';

export default function Lotto() {
    const [ballTags, setBallTags] = useState();

    const handleLottoClick = () =>{
        let nums = []
        while(nums.length<7){
            let rand = Math.floor(Math.random()*45)+1;
            if (!nums.includes(rand)) nums.push(rand);
        }
        
        console.log(nums);
        // const tm = nums.map((item, idx) => {
        //     if(idx === 5) 
        //         return <><TailBall n={item} key={`ball${item}`}/><div> + </div> </>
        //     else
        //         return <TailBall n={item} key={`ball${item}`}/>
        // })
        nums.splice(6,0, '+');
        
        const tm = nums.map((item, idx) => 
            idx === 6? <span key={`sp${item}`} className='text-2xl font-bold mx-2'> {item} </span> : <TailBall n={item} key={`ball${item}`}/>
        )

        setBallTags(tm);
    }

    return (
        <>
        <div className='flex justify-center items-center mb-10'>
            {ballTags}
        </div>
        <div>
            <TailButton caption='로또번호생성' handleClick = {handleLottoClick} color = 'blue'/>
            {/* <TailButton className='mx-28' caption='로또번호생성2' handleClick = {handleLottoClick} color = 'red' />
            <TailButton caption='로또번호생성3' handleClick = {handleLottoClick} color = 'orange'/> */}
        </div>
        </>
    )
    
}
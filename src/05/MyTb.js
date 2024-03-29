import BoxOfficeTb from './BoxOfficeTb'
import React, { Component } from 'react'

function MyTb(probs) {

    const mvs = probs.mv.map(item =>
        <tr className='border border-white 
                     hover:bg-blue-200 hover:border-1 hover:border-black
                     active:bg-white active:border-1 active:border-black'>
            <td className='border-r border-l border-white '>{item.rank}</td>
            <td className='text-left border-r border-l border-white'>
                           {item.movieNm}</td>
            <td className='text-right border-r border-l border-white'>{`${parseInt(item.salesAmt).toLocaleString()}원`}</td>
            <td className='text-right border-r border-l border-white'>{parseInt(item.audiAcc).toLocaleString()}명</td>
            <td className='text-center border-r border-l border-white'>{parseInt(item.rankInten) < 0 ? '🔻' : parseInt(item.rankInten) > 0 ? '🔺' : '➖'}</td>
        </tr>
    ); 

    // const handleClick = (mv) =>{
    //     console.log(mv)
    //     setSelMv(mv)
    // }

    return (
        <tbody className='h-10 text-center border border-y-stone-1000 border-y-stone-1000 bg-slate-100 text-black font-bold'>
            {mvs}
        </tbody>
  )
}

export default MyTb
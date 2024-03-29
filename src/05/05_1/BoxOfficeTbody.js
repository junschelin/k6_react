function BoxOfficeTbody({mv, setSelMv}) {
    const handleClick = (mv) => {
        setSelMv(mv)
    }


  return (
    <tbody className='h-10 text-center border border-y-stone-1000 border-y-stone-1000 bg-slate-100 text-black font-bold'>
        <tr className='border border-white 
            hover:bg-blue-200 hover:border-1 hover:border-black
            active:bg-white active:border-1 active:border-black'>
            <td className='border-r border-l border-white '>{mv.rank}</td>
            <td className='text-left border-r border-l border-white' 
            onClick={()=>{handleClick(mv)}}>{mv.movieNm}</td>
            <td className='text-right border-r border-l border-white'>{`${parseInt(mv.salesAmt).toLocaleString()}원`}</td>
            <td className='text-right border-r border-l border-white'>{parseInt(mv.audiAcc).toLocaleString()}명</td>
            <td className='text-center border-r border-l border-white'>{parseInt(mv.rankInten) < 0 ? '🔻' : parseInt(mv.rankInten) > 0 ? '🔺' : '➖'}</td>
        </tr>
    </tbody>
  )
}

export default BoxOfficeTbody

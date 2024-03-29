import { FaHeartCircleCheck } from "react-icons/fa6";
import {useState} from "react";

// function MyList() {
//     return (
//         <div className='w-3/6 h-3/7 flex flex-col justify-between
//                         border border-slate-500'>
//             <div className='flex flex-row'>
//                 <img src='./img/html.png' alt='html' />
//                 <div className='ml-8'>
//                     <h1 className='flex justify-start font-bold text-xl text-zinc-800'>HTML</h1>
//                     <p className='flex justify-start'>HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용</p>
//                 </div>
//             </div>
//             <div className='flex justify-end'><FaHeartCircleCheck className='text-xl mr-1'/> 좋아요</div>
//         </div>
//     )
// }
// export default MyList

function MyList({title, imgUrl, content}) {
    //지역변수
    let cnt = 0

    //state 변수
    const [stCnt, setStCnt] = useState(0);

    const handleLike = (t) =>{
        setStCnt (stCnt+1)
    }

    return (
        <div className='w-full h-auto flex border rounded
                        border-slate-500'>
            <div className='w-1/4 max-w-40'>
                <img src={imgUrl} alt={title} />
            </div>
            <div className='w-3/4 px-5 py-3'>
                <h1 className='text-2xl font-bold text-zinc-700'>{title}</h1>
                <p className='flex justify-start'>{content}</p>
                <p className='w-full flex justify-end mt-5 font-bold items-center'>
                    {/* 인수를 전달하고 싶을 때는 콜백 함수형식으로 써야함 */}
                    {/* <span className='text-xl' onClick={handleLike}><FaHeartCircleCheck className='text-red-400'/>💘</span> */}
                    <span className='text-xl' onClick = {()=>{handleLike(title)}}>
                        <FaHeartCircleCheck className='text-red-400'/></span>
                    <span className='mx-1'>좋아요</span>
                    <span>{stCnt}</span>
                </p>
            </div>
        </div>
    )
}
export default MyList
import TailInput from "./TailInput"
import TailButton from "../06/TailButton"
import {useState,useRef,useEffect} from "react";

export default function RefInput() {
    const inputRef = useRef();
    const [bts, setBts] = useState([]);
    const [tags, setTags] = useState([]);

    const handleAdd = () =>{
        if(inputRef.current.value === '') {
            alert("값을 입력하세요.");
            inputRef.current.focus();
        }

        setBts([inputRef.current.value, ...bts]);
    }

    const handleDel = () => {
        setBts([]);
        setTags();
    }

    useEffect(()=>{
        inputRef.current.value = '';
        inputRef.current.focus();
        let tm = bts.map((item, idx) => 
            <TailButton caption = {item}
                        key = {`bt${idx}`}
                        color = "orange"/>   
        );
        setTags(tm)
    }, [bts])

  return (
    <>

    <div className="w-full flex flex-col
                    bg-slate-400
                    justify-center items-center">
        <div className="w-full flex justify-center items-center">
                <div className="w-1/2 flex h-full justify-center items-center">
                    <TailInput  type = "text"
                                ref = {inputRef}
                                ph = "값입력"/>
                    {/* <input  type = "text"
                            ref = {inputRef}
                            className="bg-gray-50 border
                            border-gray-300
                            text-gray-900
                            text-sm rounded-lg
                            focus:ring-blue-500
                            focus:border-blue-500
                            bolck w-full p-2.5"
                            placeholder="값입력" /> */}
                </div>
                <div>
                    <TailButton caption = "등록" color = "blue" handleClick={handleAdd}/>  
                </div>
                <div>
                    <TailButton caption = "취소" color = "blue" handleClick={handleDel}/>
                </div>
        </div>
    </div>
    <div className="w-full border p-5 bg-slate-100">
        {tags}
    </div>
    </>
  )
}

import TailButton from "../06/TailButton"

// 대분류 중에서 현재 선택된 것 : sel
// 
export default function TrafficNav({title, category, sel, setSel}) {
    const handleBtClick = (item)=>{
        return setSel(item)
    }

    const bts = category.map(item =>
        <TailButton caption={item} 
                    color = {item === sel? "red" : "blue"} 
                    handleClick = {() => handleBtClick(item)}
                    key = {item}/>    
    )

  return (
    <div className="w-11/12 flex justify-between items-center my-5">
        <h1 className=""> 
            교통사고 {title}
        </h1>
      <div>
        {bts}
      </div>
    </div>
  )
}

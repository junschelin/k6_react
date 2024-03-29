import MyList from "./MyList"
import listData from "./MyListData.json"


function MyListMain() {
    console.log(listData)

    const myItems = listData.map(item => 
        <MyList title={item.title} 
                imgUrl={item.imgUrl} 
                content={item.content}
                key={item.title} />
    );
    
  return (
    <div className="w-10/12 grid grid-cols-1 
                    md:grid-cols-2
                    lg:grid-cols-3 gap-4">
        {myItems}
        <div className="text-black">
          선택 시 뜨게
        </div>
    </div>
  )
}

export default MyListMain

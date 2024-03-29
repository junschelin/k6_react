import BoxOfficeTb from "./BoxOfficeTb"


function BoxOfficeInfo(selMv) {
  return (
    <div className="w-4/5 h-10 text-center flex justify-center items-center text-base text-white bg-blue-900">
        {
        `[${selMv.movieCd}] ${selMv.movieNm} : 
        누적 관객수 ${selMv.audiAcc}명`
        }   
    </div>
  )
}

export default BoxOfficeInfo

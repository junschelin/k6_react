function MyDiv3({d1, d2, d3}) {
    return (
      <div className="w-3/5 h-3/5
                      flex justify-center items-center
                      bg-lime-500
                      text-lime-50">
        <p className='w-4/5
                      flex justify-start
                      font-bold text-xl
                      my-5'>
        {`${d1} > ${d2} > ${d3}`}
        </p>
  
      </div>
    )
  }
  
  export default MyDiv3
  
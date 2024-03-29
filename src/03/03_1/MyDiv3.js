function MyDiv3(probs) {
    return (
      <div className="w-3/5 h-3/5
                      flex justify-center items-center
                      bg-lime-500
                      text-lime-50">
        <p className='w-4/5
                      flex justify-start
                      font-bold text-xl
                      my-5'>
        {`${probs.d1} > ${probs.d2} > ${probs.d3}`}
        </p>
  
      </div>
    )
  }
  
  export default MyDiv3
  
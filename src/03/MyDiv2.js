function MyDiv2({d1, d2, d3}) {
  return (
    <div className="w-3/5 h-3/5
                    flex flex-col justify-center items-center
                    bg-lime-700
                    text-lime-50">
      <p className='w-3/5
                    flex justify-start
                    font-bold text-2xl
                    my-5'>
        {`${d1} > ${d2}`}
      </p>
      <MyDiv3 d1={d1} d2={d2} d3={d3}/>

    </div>
  )
}

export default MyDiv2

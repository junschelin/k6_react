import MyDiv3 from './MyDiv3'

function MyDiv2(probs) {
  console.log(probs)
  return (
    <div className="w-3/5 h-3/5
                    flex flex-col justify-center items-center
                    bg-lime-700
                    text-lime-50">
      <p className='w-3/5
                    flex justify-start
                    font-bold text-2xl
                    my-5'>
        {`${probs.d1} > ${probs.d2}`}
      </p>
      <MyDiv3 d1={probs.d1} d2={probs.d2} d3={probs.d3}/>

    </div>
  )
}

export default MyDiv2

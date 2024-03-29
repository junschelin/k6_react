import React from 'react'

function TailButton({caption, handleClick, color}) {
  const colorObj = {
    'blue' : 'bg-blue-800',
    'red' : 'bg-red-800',
    'orange' : 'bg-lime-800'
  }
  const hoverObj = {
    'blue' : 'hover:bg-blue-600',
    'red' : 'hover:bg-red-600',
    'orange' : 'hover:bg-lime-600'    
  }
  const bColor = `p-2 rounded-md ${colorObj[color]} text-white
                  ${hoverObj[color]}`;

  return (
    <button className= {`${bColor} mx-2`} 
      onClick={handleClick}>
      {caption}
    </button>
  )
}

export default TailButton

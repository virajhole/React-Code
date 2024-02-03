import React from 'react'

const MBtn = ({removeValue}) => {
// const decrement=()=>{
//     props.setCounter(props.counter-1)
// }

const decrement =()=> {
   removeValue();
}

  return (
  <>
  <button onClick={decrement}>
    -
  </button>
  </>
  )
}

export default MBtn
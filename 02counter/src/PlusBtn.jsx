 import React from 'react'
  

 const PlusBtn = ({addValue}) => {
     
    //  const addValue =()=> {
    //     props.setCounter(props.counter+1)
    // }
    //  const addValue =()=> {
    //     setCounter(counter+1)
    // }

     const addValues =()=> {
            addValue();
    }


   return (
        
    <>
    <button onClick={addValues}>
        +
    </button>
    </>
   )
 }
 
 export default PlusBtn
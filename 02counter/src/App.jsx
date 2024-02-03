import { useState } from 'react';
import './App.css'
import PlusBtn from './PlusBtn';
import MBtn from './MBtn';
import Calculator from './Calculator';
import 'bootstrap/dist/css/bootstrap.css';  
import Card from './components/Card';

function App() {
  
  let [counter,setCounter]= useState(0)  

  //  let counter =0;

   const addValue=()=>{
   counter+=1;
   console.log("clicked", counter);
  setCounter(counter);
       
    setCounter(counter +1)

   }

   const removeValue=()=>{
     
    setCounter(counter-1);
   }
      
   let myObj={
    username:"viraj",
    age:23
   }
    
   let newArray=[1,2,3]
  return (
    <>
    {/* <h1>Chai or React</h1> */}
    {/* <h2>Counter value : {counter} </h2> */}
    
    {/* <button onClick={addValue}>Add Value {counter}</button> <br /><br />

    <button onClick={removeValue}> Remove Value {counter}</button>
     */}
      {/* <PlusBtn counter = {counter} setCounter={setCounter}/>
     <MBtn counter = {counter} setCounter={setCounter}/> */}
    
      {/* <PlusBtn addValue= {addValue}/>
     <MBtn removeValue= {removeValue}/>

      
    <p>footer {counter}</p> */}

    {/* <Calculator/> */}

    {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg" alt="" width="384" height="512"></img>
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

<h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind css</h1>
    
  <Card name="viraj"  />
  <Card name="arjun" btnText="click me"/>

     </>
  )
}

export default App;

import {useState ,useEffect} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [incrementClicked , setIncrementClicked] = useState(false)
  const [decrementClicked , setDecrementClicked] = useState(false)


  useEffect(()=> {
    setCount(prevState => prevState +10)
  } , [incrementClicked])

  useEffect(()=> {
    setCount(prevState => prevState -10)
  } , [decrementClicked])

  return (

    <div className='flex gap-5 m-5 items-center'>
      <button className='bg-green-500 text-black p3 h-fit'
       onClick={()=> setDecrementClicked(prevState =>!prevState)}>Decrement by 10</button>
      

      <button onClick={() => {
        setCount(prevState=>prevState-1)
      }}className='bg-red-300 rounded-full text-black p-5' >-</button>


      <div className='text-5xl mb-3'>{count} </div>

      <button onClick={()=> {setCount (prevState => prevState+1)}}
      className='bg-red-300 text-black p-5 h-fit'  >+</button>

      <button className='bg-green-500 text-black p3 h-fit'
       onClick={()=> setIncrementClicked(prevState =>!prevState)}>Increment by 10</button>
    </div>
  )
}

export default App



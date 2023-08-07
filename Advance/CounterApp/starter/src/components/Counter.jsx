import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slice/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

  return (
    <div className='w-full flex gap-2 border border-black justify-center items-center'>
      <button
      className='font-bold'
      onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <br/>
      <br/>

      <div>{count}</div>

      <br/>
      <br/>

      <button
      className='font-bold '
      onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter

import React from 'react'

function Counter() {

    const [count, setCount] = React.useState(0)

  return (
    <div className='container'>
        <h1 className='numero'>{count}</h1>
        
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        <button onClick={() => setCount(previus => previus - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        
    </div>
  )
}

export default Counter
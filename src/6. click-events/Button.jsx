import React from 'react'

function Button() {

    const HandleClick = () => {console.log("Hi");}
    const HandleClick2 = (name) => {console.log(`Hi ${name}`);}
    const HandleClick3 = (e) => {console.log(e.target);}
    const HandleClick4 = (e) => e.target.textContent = "AAAI!!";
  return (
    <>
        <button className='btn' onClick={HandleClick}>Click me</button>
        <button className='btn' onClick={() => HandleClick2("John")}>Click me</button>
        <button className='btn' onClick={HandleClick3}>Click me</button>
        <button className='btn' onClick={(e) => HandleClick4(e)}>Click me</button>
    </>
  )
}

export default Button
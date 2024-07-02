import React, {useState, useEffect, useRef} from 'react'

//useRef() = É um hook que permite a você criar referências mutáveis em componentes funcionais.

function MyComponent() {

    //Com useState
    let [number, setNumber] = useState(0);

    //Com useRef
    const numberRef = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        console.log("Componente renderizado");
        //Com useState o componente renderiza toda vez que o estado é alterado
        //Com useRef o componente não 
    });

    function handleClick() {
        //setNumber(n => n + 1);
        numberRef.current++;
        console.log(numberRef.current);

        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
    }

  return (
    <div>
        <button onClick={handleClick}>
            Click me
        </button>
        <input type="text" ref={inputRef}/>
    </div>
  )
}

export default MyComponent
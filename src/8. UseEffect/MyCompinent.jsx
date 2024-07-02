import React, {useState, useEffect} from 'react'

//UseEffect = É um hook que serve para executar efeitos colaterais em componentes funcionais

//useEffect(function, [array de dependências])

// 1. useEffect(() => {}) -> Executa a função toda vez que o componente é renderizado
// 2. useEffect(() => {}, []) -> Executa a função uma única vez
// 3. useEffect(() => {}, [variável]) -> Executa a função toda vez que a variável mudar

//USOS
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching data from an API
// #5 Clean up when a component is unmounted


function MyCompinent() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    })

    const addCount = () => {
        setCount(c => c + 1);
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={addCount}>Add</button>
    </div>
  )
}

export default MyCompinent
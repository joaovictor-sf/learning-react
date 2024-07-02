import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("Default Name");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => setName("John Doe")
    

    const clear = () => {
        setName("")
        setAge(0)
    }

    const incrementAge = () => setAge(age + 1)
    
    

  return (
    <div>
        <h1>My Component</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <h2>{name}</h2>

        <hr />

        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>increment Age</button>

        <p>Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={() => setIsEmployed(!isEmployed)}>Toggle Employment</button>

        <br />
        <br />

        <button onClick={clear}>Limpar</button>

    </div>
  )
}

export default MyComponent
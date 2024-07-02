import React, {useState} from 'react'

function MyComponent() {

    const [car, setCar] = useState({make: 'Ford', model: 'Mustang', year: 1969})

    const handleYearChange = (e) => {
        setCar(c => ({...c, year: e.target.value}));//this is the same as {year: e.target.value, make: car.make, model: car.model}
    }

    const handleMakeChange = (e) => {
        setCar(c => ({...c, make: e.target.value}));
    }

    const handleModelChange = (e) => {
        setCar(c => ({...c, model: e.target.value}));
    }

  return (
    <div>
        <h1>My Car</h1>
        <p>Make: {car.make}</p>
        <p>Model: {car.model}</p>
        <p>Year: {car.year}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/>
        <input type="text" value={car.make} onChange={handleMakeChange}/>
        <input type="text" value={car.model} onChange={handleModelChange}/>
    </div>
  )
}

export default MyComponent
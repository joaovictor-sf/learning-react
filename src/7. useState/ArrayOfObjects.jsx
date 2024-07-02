import React from 'react'

function ArrayOfObjects() {

    const[cars, setCars] = React.useState([]);
    const[carYear, setCarYear] = React.useState(new Date().getFullYear());
    const[carMake, setCarMake] = React.useState('');
    const[carModel, setCarModel] = React.useState('');

    const addCar = () => {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }

    const removeCar = (index) => {
        const newCars = cars.filter((_, i) => i !== index);//Question: What is the purpose of the underscore?
        //Answer: The underscore is a placeholder for the current element in the array. It is used to indicate that the current element is not being used in the function.
        setCars(newCars);
    }

    const changeCarYear = (event) => {
        setCarYear(event.target.value);
    }

    const changeCarMake = (event) => {
        setCarMake(event.target.value);
    }

    const changeCarModel = (event) => {
        setCarModel(event.target.value);
    }

  return (
    <div>
        <h2>List of Car Objects</h2>
        <ul>
            {cars.map((car, index) => {
                return (
                    <li key={index}>{car.year} {car.make} {car.model} <button type="button" onClick={() => removeCar(index)}>Remove</button></li>
                )
            })}
        </ul>

        <input type="number" value={carYear} onChange={changeCarYear}/><br />
        <input type="text" value={carMake} onChange={changeCarMake} placeholder='Enter car make'/><br />
        <input type="text" value={carModel} onChange={changeCarModel} placeholder='Enter car model'/><br />
        <button type="button" onClick={addCar}>Click Here!</button>
    </div>
  )
}

export default ArrayOfObjects
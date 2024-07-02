import React from 'react'

function ComArrays() {

    const [food, setFood] = React.useState(["apple", "banana", "cherry", "date", "elderberry"]);

    const addFood = () => {
        const newfood = document.getElementById('foodInput').value;
        setFood([...food, newfood]);
    }

    const removeFood = (index) => {
        const newFood = food.filter((item, i) => i !== index);
        setFood(newFood);
    }

  return (
    <div>
        <h2>List of Food</h2>

        <ul>
            {food.map((item, index) => (
                <li key={index} onClick={() => removeFood(index)}>{item}</li>
            ))}
        </ul>
        <input type="text" id='foodInput' placeholder='Enter food name'/>
        <button onClick={addFood}>Add Food</button>

    </div>
  )
}

export default ComArrays
import React from 'react'

function List() {
    const fruits = [{id: 1, name: "Apple", calories: 95}, 
                    {id: 2, name: "Banana", calories: 105}, 
                    {id: 3, name: "Cherry", calories: 50}, 
                    {id: 4, name: "Date", calories: 20}, 
                    {id: 5, name: "Elderberry", calories: 73}, 
                    {id: 6, name: "Fig", calories: 107}, 
                    {id: 7, name: "Grape", calories: 62},
    ];
 
    // * SORTING
    //fruits.sort((a, b) => a.calories - b.calories);//ort the fruits by calories in ascending order
    // fruits.sort((a, b) => b.calories - a.calories);//sort the fruits by calories in descending order
    //fruits.sort((a, b) => a.name.localeCompare(b.name));//sort the fruits by name in alphabetical order
    //fruits.sort((a, b) => b.name.localeCompare(a.name));//sort the fruits by name in reverse alphabetical order

    // * FILTERING
    const lowCalories = fruits.filter(fruit => fruit.calories < 60);//filter the fruits with less than 60 calories
    const highCalories = fruits.filter(fruit => fruit.calories >= 60);//filter the fruits with 60 or more calories

    const fruitList = fruits.map(fruit => 
        <li key={fruit.id}>
        {fruit.name} - {fruit.calories} calories</li>)
    const fruitList2 = lowCalories.map(fruit => 
    <li key={fruit.id}>
        {fruit.name} - {fruit.calories} calories</li>)
    const fruitList3 = highCalories.map(fruit =>
        <li key={fruit.id}>
            {fruit.name} - {fruit.calories} calories</li>)

  return (
    <>
        <ol>
            <h3>List of Fruits</h3>
            {fruitList}
        </ol>
        <ol>
            <h3>Fruits with less than 60 calories</h3>
            {fruitList2}
        </ol>
        <ol>
            <h3>Fruits with 60 or more calories</h3>
            {fruitList3}
        </ol>
    </>
  )
}

export default List
import List from "./List";
import ListProps from "./ListProps";

function App() {
    /*const fruits = [{id: 1, name: "Apple", calories: 95},
                    {id: 2, name: "Banana", calories: 105},
                    {id: 3, name: "Cherry", calories: 50},
                    {id: 4, name: "Date", calories: 20},
                    {id: 5, name: "Elderberry", calories: 73},
                    {id: 6, name: "Fig", calories: 107},
                    {id: 7, name: "Grape", calories: 62},
                    ];*/
    const fruits = [];

    const vegetais = [{id: 8, name: "Asparagus", calories: 20},
                    {id: 9, name: "Broccoli", calories: 55},
                    {id: 10, name: "Cabbage", calories: 22},
                    {id: 11, name: "Dill", calories: 43},
                    {id: 12, name: "Eggplant", calories: 25},
                    {id: 13, name: "Fennel", calories: 12},
                    {id: 14, name: "Garlic", calories: 149},
                    ];

  return (
    <>
        {fruits.length > 0 && <ListProps itens={fruits} category="Fruits"/>}
        {vegetais.length > 0 && <ListProps itens={vegetais} category="Vegetables"/>}
    </>
  );
}

export default App


import foods from "./foods.json"
import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from "./components/AddFoodForm";

function App() {

  const [foodsList, setFoodList] = useState(foods)


const AddNewFood = (newFood) =>{
  const updatedFoodsList = [...foodsList, newFood]
  setFoodList(updatedFoodsList)
}

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm AddNewFood={AddNewFood} />
      <div className='food'>
         {foodsList.map((food) => {
            return  <FoodBox  food={food} key={food.name}/>
         })}
      </div>

    </div>
  );
}

export default App;

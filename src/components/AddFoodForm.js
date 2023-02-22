import React from 'react'
import { useState } from "react"
import { Divider, Input } from 'antd';

const AddFoodForm = (props) => {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")


    const handleSubmit = (e) => {

        e.preventDefault()
        const newFood = { name, image, calories, servings }

        props.AddFoodForm(newFood)

        setName("")
        setImage("")
        setCalories("")
        setServings("")

    }



    return (
        <div>
            <h1>Add Food Entry</h1>
            <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>
                <label htmlFor="name">Name</label>
                <Input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="Image">Image</label>
                <input type="url" name="image" value={image} onChange={(e) => setImage(e.target.value)} />

                <label htmlFor="calories ">Calories</label>
                <input type="number" name="calories " value={calories} onChange={(e) => setCalories(e.target.value)} />

                <label htmlFor="servings">Servings</label>
                <input type="text" name="servings" value={servings} onChange={(e) => setServings(e.target.value)} />


                <button type='submit'>Create</button>
            </form>

        </div>

    )

}

export default AddFoodForm

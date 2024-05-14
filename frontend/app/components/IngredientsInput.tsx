import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import MealsCard from "./MealsCard";

const IngredientsInput: React.FC = () => {
    const [ingredients, setIngredients] = useState<string>("");
    const [mealSuggestions, setMealSuggestions] = useState<any[]>([]); // Change the type to any[]

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIngredients(e.target.value);
    }

    const handleClick = async () => {
        try {
            console.log('ingredients:', ingredients);
            const response = await axios.post<{ meals: any[] }>('http://localhost:5000/api/generate-meals', { ingredients }); // Change the type to any[]
            setMealSuggestions(response.data.meals);
        } catch (error) {
            console.error("Error generating meal suggestions:", error);
        }
    }

    return (
        <div>
            <input
                type="text"
                value={ingredients}
                placeholder="Enter Ingredients"
                onChange={handleChange}
                className="m-2 px-2"
            />
            <button onClick={handleClick}>Generate</button>
            {mealSuggestions.length > 0 && <MealsCard mealSuggestions={mealSuggestions} />}
        </div>
    );
};

export default IngredientsInput;

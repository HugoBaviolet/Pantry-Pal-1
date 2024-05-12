import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import MealsCard from "./MealsCard";

interface MealSuggestion {
    name: string;
    recipe: string;
}

const IngredientInput: React.FC = () => {
    const [ingredients, setIngredients] = useState<string>("");
    const [mealSuggestions, setMealSuggestions] = useState<MealSuggestion[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIngredients(e.target.value);
    }
    const handleClick = async () => {
        try {
            const response = await axios.post<{ meals: MealSuggestion[] }>('/api/generate-meals', { ingredients });
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
            />
            <button onClick={handleClick}>Generate</button>
            <MealsCard mealSuggestions={mealSuggestions} />
        </div>
    );
};

export default IngredientInput;

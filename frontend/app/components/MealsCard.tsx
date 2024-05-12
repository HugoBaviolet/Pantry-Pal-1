import React from 'react';

interface MealSuggestion {
    name: string;
    recipe: string;
}

interface MealsProps {
    mealSuggestions: MealSuggestion[];
}

const MealsCard: React.FC<MealsProps> = ({ mealSuggestions }) => {
    return (
        <div>
            <h2>Meal Suggestions</h2>
            <ul>
                {mealSuggestions.map((meal, index) => (
                    <li key={index}>
                        {/* Render each meal suggestion */}
                        <div>
                            <div>{meal.name}</div>
                            <div>{meal.recipe}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealsCard;

import React from 'react';

// interface MealSuggestion {
//     name: string;
//     recipe: string;
// }

interface MealsProps {
    mealSuggestions: string[];
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
                            <p>{meal}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealsCard;

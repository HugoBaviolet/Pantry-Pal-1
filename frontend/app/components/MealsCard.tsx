import React from 'react';

interface MealsProps {
    mealSuggestions: { meal: string; recipe: string }[];
}

const MealsCard: React.FC<MealsProps> = ({ mealSuggestions }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {mealSuggestions.map((mealObj, index) => (
                <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                    <h3 className="text-lg mb-2">{mealObj.meal}</h3>
                    <div className="border-t border-gray-200 pt-2">
                        <h4 className="text-md font-semibold mb-1"></h4>
                        <p className="text-sm text-gray-600" style={{ maxWidth: '300px', overflowWrap: 'break-word' }}>
                            {mealObj.recipe}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MealsCard;

import React, { useState } from "react";

const IngredientInput = () => {
    const [ingredients, setIngredients] = useState<string>("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIngredients(e.target.value);
    }
    function handleClick() {
        //On click we send data given in input to backend
        //backend then finds recipes meals and sends data back to front end
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
        </div>
    );
};

export default IngredientInput;

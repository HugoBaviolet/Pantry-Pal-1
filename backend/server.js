const express = require('express');
const app = express();
const { pipeline } = require('@huggingface/inference')

app.post('/api/generate-meals', async (req, res) => {
    try{
        const {ingredients} = req.body;
        const mealSuggestions = await generateMealSuggestions(ingredients)

        //send to frontend
        res.json({meals: mealSuggestions});
    } catch (error){
        console.error('Error generating meal suggestions: ', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

async function generateMealSuggestions(ingredients){
    const nlpPipeline = pipeline('text-generation', {model: 'distilgpt2'});

    const mealSuggestions = await nlpPipeline(ingredients);

    return mealSuggestions
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
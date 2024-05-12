const express = require('express'); // Import the Express.js framework
const cors = require('cors');
const app = express(); // Create an Express application instance
const {pipeline}  = require('@huggingface/inference'); // Import the Hugging Face Transformers pipeline

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Pantry Pal API'); // Send a welcome message 
  });
  
// Route handler for POST requests to '/api/generate-meals'
app.post('/api/generate-meals', async (req, res) => {
    try {
        const { ingredients } = req.body; // Extract the 'ingredients' from the request body

        if (!ingredients) {
            throw new Error("Ingredients data not provided");
        }

        const ingredientList = ingredients.split(',').map(ingredient => ingredient.trim());
        const ingredientsString = ingredientList.join(', '); // Create a string representation of the ingredients

        const mealSuggestions = await generateMealSuggestions(ingredientList); // Generate meal suggestions based on the ingredients

        // Send meal suggestions and ingredients string to the frontend as a JSON response
        res.json({ meals: mealSuggestions, ingredients: ingredientsString });
    } catch (error) {
        // Handle errors by logging and sending an error response
        console.error('Error generating meal suggestions: ', error);
        res.status(400).json({ error: 'Bad Request' }); // Send a 400 Bad Request status code
    }
});


// Function to generate meal suggestions using the Hugging Face Transformers pipeline
async function generateMealSuggestions(ingredients) {
    const nlpPipeline = pipeline('text-generation', { model: 'distilgpt2' }); // Create a pipeline for text generation
    const mealSuggestions = await nlpPipeline(ingredients); // Generate meal suggestions using the provided ingredients

    return mealSuggestions; // Return the generated meal suggestions
}

const PORT = process.env.PORT || 5000; // Define the port for the server to listen on
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Start the server and log the port it's running on
});

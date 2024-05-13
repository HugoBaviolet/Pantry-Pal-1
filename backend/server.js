const express = require('express'); // Import the Express.js framework
const cors = require('cors'); // Import the CORS middleware
const OpenAI = require('openai')
//const openai = require('openai'); // Import the OpenAI SDK

const app = express(); // Create an Express application instance
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// OpenAI API key (replace 'your_openai_api_key' with your actual API key)
const apiKey = 'enter api key';
const openai = new OpenAI({
  apiKey: apiKey 
});




// Function to generate meal suggestions using the OpenAI GPT model
async function generateMealSuggestions(ingredients) {
    // Construct the prompt to ask the GPT model for meal suggestions based on ingredients
    const prompt = `Given the ingredients ${ingredients}, suggest some meal recipes.`;

    // Call the OpenAI API to complete the prompt
    const completion = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct', // Choose the GPT engine
        prompt: prompt,
        max_tokens: 200, // Maximum number of tokens in the response
    });

    // Extract and return the generated meal suggestions from the API response
    return completion.choices.map(choice => choice.text);
}

// Route handler for POST requests to '/api/generate-meals'
app.post('/api/generate-meals', async (req, res) => {
    try {
        const { ingredients } = req.body; // Extract the 'ingredients' from the request body

        // Check if ingredients were provided
        if (!ingredients) {
            throw new Error("Ingredients data not provided");
        }

        // Parse the ingredients string into a list of ingredients
        const ingredientList = ingredients.split(',').map(ingredient => ingredient.trim());
        const ingredientsString = ingredientList.join(', '); // Create a string representation of the ingredients

        // Generate meal suggestions based on the provided ingredients
        const mealSuggestions = await generateMealSuggestions(ingredientsString);

        // Send meal suggestions and ingredients string to the frontend as a JSON response
        res.json({ meals: mealSuggestions });
    } catch (error) {
        // Handle errors by logging and sending an error response
        console.error('Error generating meal suggestions: ', error);
        res.status(400).json({ error: 'Bad Request' }); // Send a 400 Bad Request status code
    }
});

const PORT = process.env.PORT || 5000; // Define the port for the server to listen on
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Start the server and log the port it's running on
});

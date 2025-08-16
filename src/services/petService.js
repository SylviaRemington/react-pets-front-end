// touch src/services/petService.js
// src/services/petService.js
// ___________________________________________
// IMPORTS

import axios from "axios";








// ___________________________________________

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;
// THIS CREATES THE BASE URL.
//  Environment variables are loaded when the app is first run, 
// and Vite does not track changes to the .env file. 
// If you alter your .env file, you must restart your development server 
// for the changes to take effect.

// ABOVE IS THE SAME AS WRITING THE FOLLOWING:
// const BASE_URL = `http://localhost:3000/pets`;

const index = async () => {
    const res = await axios.get(BASE_URL);
    return res.json();
}



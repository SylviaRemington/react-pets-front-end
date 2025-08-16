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

// --------------

// 1ST VERSION OF A FUNCTION THAT WOULD WORK WITH AXIOS
// One way to do this with axios (more ways given below)
// const index = async () => {
//     const res = await axios.get(BASE_URL);
//     return res.json();
// }

// 2nd VERSION - Another way - with wrapping it up in a try catch
// const index = async () => {
//     try {
//         const res = await axios.get(BASE_URL);
//         return res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// 3rd VERSION - using then
// This does the same as a try catch block.
// 'then' is newer syntax and newer version
// But remember: axios.get is the thing that gets you your first promise. And then go from there.
// Once that promise has resolved, then you end up wtih your response (which is after the .then). Then when you get your response, you do something with it.
// Then works as an await.
// const index = async () => {
//     const res = await axios
//     .get(BASE_URL)
//     .then(response => response.json())
//     .catch(err => console.log(err));
// };

// ADDTL VERSION - 4TH VERSION
// get it and handle it, and then if it breaks, console log it
// const index = async () => {
//     const res = await axios.get(BASE_URL).catch((e) => console.log(e));
// };

// Addtl 5th VERSION
const index = async () => {
    return await axios.get(BASE_URL).catch((e) => console.log(e));
};

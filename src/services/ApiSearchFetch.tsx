const baseURL = "https://superheroapi.com/api.php/";
const API_KEY = import.meta.env.VITE_SUPER_HERO_API_KEY;

// Fetch by name
export const fetchByName = async (searchTerm: string) => {
  try {
    const response = await fetch(`${baseURL}${API_KEY}/search/${searchTerm}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`There was an error fetching the data: ${error}`);
  }
};

// Fetch by ID
export const fetchById = async (id: string) => {
  try {
    const response = await fetch(`${baseURL}${API_KEY}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`There was an error fetching the data by ID: ${error}`);
  }
};

// Fetch a random superhero
export const fetchRandomFromAPI = async () => {
  const randomId = Math.floor(Math.random() * 732) + 1;
  const data = await fetchById(randomId.toString());
  return data;
};

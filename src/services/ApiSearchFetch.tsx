const baseURL = "https://superheroapi.com/api.php/";
const API_KEY = import.meta.env.VITE_SUPER_HERO_API_KEY;

export const fetchFromAPI = async (name: string) => {
  try {
    const response = await fetch(`${baseURL}${API_KEY}/search/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`There was an error fetching the data ${error}`);
  }
};

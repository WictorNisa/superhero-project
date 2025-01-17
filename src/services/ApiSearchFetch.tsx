const BASE_URL = "https://superheroapi.com/api/";
// const API_KEY = process.env.REACT_APP_API_KEY;
// dbee67cfeb85944498c21189ae4544b7

export const fetchDataByName = async (name: string) => {
  try {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/dbee67cfeb85944498c21189ae4544b7/search/${name}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`There was an error fetching the data ${error}`);
  }
};

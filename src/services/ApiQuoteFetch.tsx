const BASE_URL = 'https://superhero-quotes.herokuapp.com/'

export const fetchQuote = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`There was an error fetching the data: ${error}`);
  }
};
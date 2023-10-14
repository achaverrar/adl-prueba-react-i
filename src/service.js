const TOKEN = import.meta.env.VITE_API_TOKEN;
const IMAGES_URL = import.meta.env.VITE_API_IMAGES_URL;
const SEARCH_URL = import.meta.env.VITE_API_SEARCH_URL;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

const searchMovie = async (query) => {
  try {
    const response = await fetch(`${SEARCH_URL}/${query}`, options);
    return await response.json();
  } catch (error) {
    console.error(err);
  }
};

export { IMAGES_URL, searchMovie };

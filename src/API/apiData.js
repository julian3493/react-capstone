const apiData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
    const data = await response.json();
    const results = { ...data.results   };
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

export default apiData;

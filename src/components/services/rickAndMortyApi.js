export const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  console.log(res);
  const json = await res.json();

  return json.results;
};

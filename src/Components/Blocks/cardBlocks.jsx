import { fetchData } from "../../Hooks/fetchData";

const apiData = fetchData('https://api.jikan.moe/v4')
    export const AnimeList = () => {
      const category = apiData.read();
  return (
    <div>
      <h1>Lista de Animes Populares</h1>
        <p>Cargando animes...</p>
      
        <ul>
          por ahora np hay nada
        </ul>
    </div>
  );
}

export default AnimeList;


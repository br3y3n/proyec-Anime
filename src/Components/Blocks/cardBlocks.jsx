import React, { useState, useEffect } from 'react';
    export const AnimeList = () => {
       const [animeList, setAnimeList] = useState([]);
       const [loading, setLoading] = useState(true);
        useEffect(() => {
          const fetchCharacter = async () => {
            try {
              const response = await fetch(`https://api.jikan.moe/v4 /anime/{id}`);
              if (response.ok) {
                
                const data = await response.json();
                setAnimeList(data.top);
                setLoading(false);
              } else {
                console.error('Error al obtener los animes:', response.status);
              }
            } catch (error) {
              console.error('Error en la solicitud:', error);
              setLoading(false);
            }
          };
      
          fetchCharacter();
        }, []);
  return (
    <div>
      <h1>Lista de Animes Populares</h1>
      {loading ? (
        <p>Cargando animes...</p>
      ) : (
        <ul>
          {animeList.map((anime) => (
            <li key={anime.mal_id}>{anime.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AnimeList;


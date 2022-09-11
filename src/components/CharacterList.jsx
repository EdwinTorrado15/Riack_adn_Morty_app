import { Fragment, useEffect, useState } from "react";
import Character from "./Character";

function NavPage({ page, setPage }) {
  return (
    <div className="flex justify-center p-2 items-center gap-5">

      <p>Pagina: {page}</p>

      {/* Boton pagina anterior */}
      {page <= 1 ? (
        <button className="bg-blue-300 p-2 rounded-lg cursor-auto"> Anterior </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-400 p-2 rounded-lg "
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </button>
      )}

      {/* Boton pagina siguiente */}
      <button
        className="bg-blue-500 hover:bg-blue-400 p-2 rounded-lg "
        onClick={() => setPage(page + 1)}
      >
        Siguiente
      </button>
    </div>
  );
}

const CharacterList = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacter(data.results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <Fragment>
      <NavPage page={page} setPage={setPage} />

      <div className="flex flex-wrap justify-center gap-5 items-center p-4">
        {loading ? (
          <h1>Cargando..........</h1>
        ) : (
          <Fragment>
            {character.map((character) => {
              return (
                <div key={character.id}>
                  <Character character={character} />
                </div>
              );
            })}
          </Fragment>
        )}
      </div>
      <NavPage page={page} setPage={setPage} />
    </Fragment>
  );
};

export default CharacterList;

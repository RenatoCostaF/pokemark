import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import * as S from "./styles";

import PokeCard from "../../components/PokeCard";
import Pagination from "../../components/Pagination";

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);

  const handlePokemonsList = useCallback(async () => {
    const result = await api.get(
      `/pokemon?limit=${offset >= 144 ? 7 : 12}&offset=${offset}`
    );
    setPokemonData(result.data.results);
  }, [offset]);

  useEffect(() => {
    handlePokemonsList();
  }, [offset, handlePokemonsList]);

  return (
    <>
      <S.Container>
        {pokemonData &&
          pokemonData.map((pokemon, index) => {
            return (
              <PokeCard key={index} url={pokemon.url} name={pokemon.name} />
            );
          })}
      </S.Container>
      <Pagination setCurrentPage={setOffset} />
    </>
  );
}

export default Home;

import React, {
  useEffect,
  useMemo,
  useState,
  useContext,
  useCallback,
} from "react";

import * as S from "./styles";

import FullApi from "../../services/api";
import Attributes from "../AttributesBar";
import Context from "../../Global";

import { BsCartPlus } from "react-icons/bs";

function PokeCard({ url, name }) {
  const [pokemonData, setPokemonData] = useState([]);
  const { addCartItems } = useContext(Context);

  const getPokemon = useCallback(async () => {
    const result = await FullApi.get(url);
    setPokemonData(result);
  }, [url]);

  const handlePrice = useMemo(() => {
    const price =
      pokemonData?.data?.stats?.reduce((total, index) => {
        return total + index.base_stat;
      }, 0) || 0;

    return parseFloat((price / 6).toFixed(2));
  }, [pokemonData]);

  const formatedPrice = useMemo(() => {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(handlePrice);
  }, [handlePrice]);

  const handleCart = ({ name, id, img, price }) => {
    addCartItems({
      name: name,
      id: id,
      img: img,
      price: price,
    });
  };

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  const handleColorType = (type) => {
    switch (type) {
      case "normal":
        return "#bcbbad";
      case "fire":
        return "#fa5644";
      case "water":
        return "#56aeff";
      case "electric":
        return "#fee63d";
      case "dark":
        return "#8b6754";
      case "psychic":
        return "#fa64b3";
      case "ice":
        return "#97f1ff";
      case "grass":
        return "#8dd851";
      case "flying":
        return "#78a3ff";
      case "bug":
        return "#c3d220";
      case "dragon":
        return "#8974ff";
      case "fairy":
        return "#faaeff";
      case "fighting":
        return "#aa584b";
      case "ghost":
        return "#7975d6";
      case "ground":
        return "#eac958";
      case "rock":
        return "#cdbd72";
      case "poison":
        return "#a75b9e";
      case "steel":
        return "#c5c3da";
      default:
        return "#f7f7f7";
    }
  };

  return (
    <S.Container
      style={{
        backgroundColor: `${handleColorType(
          pokemonData?.data?.types[0].type.name
        )}99`,
      }}
    >
      <S.ContentNumberText>#{pokemonData.data?.id}</S.ContentNumberText>
      <S.ContentNameText>{name}</S.ContentNameText>
      <img
        src={pokemonData.data?.sprites?.front_default}
        alt="Img frontal do pokemon"
      />

      <S.Content>
        {pokemonData?.data?.types?.length > 0 &&
          pokemonData.data.types.map((types, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: handleColorType(types.type.name),
                  borderRadius: 20,
                }}
              >
                <S.ContentTextType>{types.type.name}</S.ContentTextType>
              </div>
            );
          })}

        <S.ContentStats>
          <h3
            style={{
              color: `${handleColorType(
                pokemonData?.data?.types[0].type.name
              )}`,
            }}
          >
            Base Stats
          </h3>
          <S.Stats>
            <S.StatsText>
              HP {pokemonData?.data?.stats[0]?.base_stat}
            </S.StatsText>
            <Attributes
              color={handleColorType(pokemonData?.data?.types[0].type.name)}
              width={pokemonData?.data?.stats[0]?.base_stat}
            />
          </S.Stats>
          <S.Stats>
            <S.StatsText>
              ATK {pokemonData?.data?.stats[1]?.base_stat}
            </S.StatsText>
            <Attributes
              color={handleColorType(pokemonData?.data?.types[0].type.name)}
              width={pokemonData?.data?.stats[1]?.base_stat}
            />
          </S.Stats>
          <S.Stats>
            <S.StatsText>
              DEF {pokemonData?.data?.stats[2]?.base_stat}
            </S.StatsText>
            <Attributes
              color={handleColorType(pokemonData?.data?.types[0].type.name)}
              width={pokemonData?.data?.stats[2]?.base_stat}
            />
          </S.Stats>
          <S.Stats>
            <S.StatsText>
              SATK {pokemonData?.data?.stats[3]?.base_stat}
            </S.StatsText>
            <Attributes
              color={handleColorType(pokemonData?.data?.types[0].type.name)}
              width={pokemonData?.data?.stats[3]?.base_stat}
            />
          </S.Stats>
          <S.Stats>
            <S.StatsText>
              SDEF {pokemonData?.data?.stats[4]?.base_stat}
            </S.StatsText>
            <Attributes
              color={handleColorType(pokemonData?.data?.types[0].type.name)}
              width={pokemonData?.data?.stats[4]?.base_stat}
            />
          </S.Stats>
          <S.Stats>
            <S.StatsText>
              SPD {pokemonData?.data?.stats[5]?.base_stat}
            </S.StatsText>
            <Attributes
              color={handleColorType(pokemonData?.data?.types[0].type.name)}
              width={pokemonData?.data?.stats[5]?.base_stat}
            />
          </S.Stats>
        </S.ContentStats>
        <S.Price>{formatedPrice}</S.Price>

        <S.ButtonPrice
          onClick={() =>
            handleCart({
              name: name,
              id: pokemonData.data?.id,
              img: pokemonData.data?.sprites?.front_default, 
              price: formatedPrice,
            })
          }
        >
          <BsCartPlus />
        </S.ButtonPrice>
      </S.Content>
    </S.Container>
  );
}

export default PokeCard;

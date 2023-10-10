import { useEffect, useState } from "react";
import Pokemon from "../../Pokemon/Pokemon";
import axios from "axios";

function PokedexList() {
  const [PokedmanList, setPokedmanList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function Downloadpokemons() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log(response.data);
    const pokedmonDatapro = response.data.results;
    // console.log(pokedmonDatapro);

    const pokemonResultPromise = pokedmonDatapro.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokedmonData = await axios.all(pokemonResultPromise);
    // console.log(pokedmonData);

    const res = pokedmonData.map((pokeData) => {
      const pokeemon = pokeData.data;
      // console.log(pokeemon);
      return {
        id: pokeemon.id,
        name: pokeemon.name,
        images: pokeemon.sprites.other
          ? pokeemon.sprites.other.dream_world.front_default
          : pokeemon.sprites.front_shiny,
        types: pokeemon.types,
      };
    });

    console.log(res);
    setPokedmanList(res);
    setIsLoading(false);
  }

  useEffect(() => {
    Downloadpokemons();
  }, []);
  return (
    <div className="Pokedex-List-Wrapper">
      <h3>Pokedman List</h3>
      {isLoading
        ? "Loading...."
        : PokedmanList.map((p) => (
            <Pokemon name={p.name} images={p.images} key={p.id} />
          ))}
    </div>
  );
}

export default PokedexList;

import PokedexList from "../PokedexList/PokedList";
import Search from "../Search/Search";
import "./Pokedex.css";

function Pokedex() {
  return (
    <div className="pokedex-wrapper">
      <h1>Pokedex</h1>
      <Search />
      <PokedexList />
    </div>
  );
}

export default Pokedex;

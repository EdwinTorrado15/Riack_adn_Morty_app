import CharacterList from "./components/CharacterList";
import RickandMorty from './assets/RickandMorty.svg';
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <div className="bg-app text-white">
      <Navbar/>
      <div className="flex justify-center bg-white p-5 mb-5">
        <img src={RickandMorty} alt="Logo rick an morty"/>
      </div>
      <CharacterList/>

    </div>
  );
};

export default App;

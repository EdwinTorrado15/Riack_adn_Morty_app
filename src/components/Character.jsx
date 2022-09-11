import { BsCircleFill } from "react-icons/bs";

const Character = ({ character }) => {
  return (
    <div className="card">
      <img
        src={character.image}
        alt={character.name}
        className=" w-full h-full object-cover"
      />
      <h2 className="p-2 font-bold text-2xl hover:text-orange-400 cursor-default">
        {character.name}
      </h2>
      <div className="px-2 flex-col gap-3">
        {/* Estado de vida */}
        <div className="flex items-center gap-2">
          {character.status === "Alive" ? (
            <BsCircleFill className="text-green-400" />
          ) : character.status === "unknown" ? (
            <BsCircleFill className="text-orange-400" />
          ) : (
            <BsCircleFill className="text-red-500" />
          )}
          <p>{character.status}</p>
          <span> - </span>
          <p>{character.species}</p>
        </div>
      </div>
      <div className="p-3">
        <span className="font-semibold text-gray-400">Lugar de origen:</span>
        <p>{character.origin.name}</p>
      </div>
    </div>
  );
};

export default Character;

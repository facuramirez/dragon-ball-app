import { useEffect, useState } from "react";
import { DragonItem } from "./DragonItem";
import { ripples } from "ldrs";
import { Loader } from "./Loader";
import "../css/DragonGrid.css";

ripples.register();

export const DragonGrid = ({ input }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [debouncedCharacters, setDebouncedCharacters] = useState("");

  useEffect(() => {
    const getCharacters = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters?name=${input}`
        );
        if (!response.ok) throw new Error("Error get characters");
        const data = await response.json();

        setCharacters(input ? data : data.items);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    getCharacters();
  }, [debouncedCharacters]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCharacters(input);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div
      className="dragon-grid w-[min(100rem,85%)] px-12"
      /* className={`dragon-grid w-[min(${
        characters.length > 2 ? "100rem" : "fit"
      },80%)]`} */
    >
      {isLoading ? (
        <Loader />
      ) : characters.length > 0 ? (
        characters.map((character) => (
          <DragonItem key={character.id} {...character} />
        ))
      ) : (
        <h1>No se encontraron resultados</h1>
      )}
    </div>
  );
};

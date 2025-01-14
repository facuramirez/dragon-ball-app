/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { DragonItem } from "./DragonItem";
import { ripples } from "ldrs";
import { Loader } from "./Loader";
import "../css/DragonGrid.css";
import { useSearch } from "wouter";

ripples.register();

export const DragonGrid = ({ input }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [debouncedCharacters, setDebouncedCharacters] = useState("");
  const searchString = useSearch();

  useEffect(() => {
    const getFilteredCharacters = async () => {
      setIsLoading(true);
      try {
        if (searchString) {
          const response = await fetch(
            `https://dragonball-api.com/api/characters?${searchString}`
          );
          if (!response.ok) throw new Error("Error get characters");
          const data = await response.json();

          setCharacters(data);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    getFilteredCharacters();
  }, [searchString]);

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
        console.log(error);
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

  if (isLoading) return <Loader />;

  return (
    <div
      className="dragon-grid w-[min(100rem,85%)] px-2 md:px-12"
      /* className={`dragon-grid w-[min(${
        characters.length > 2 ? "100rem" : "fit"
      },80%)]`} */
    >
      {characters.length > 0 ? (
        characters.map((character) => (
          <DragonItem key={character.id} {...character} />
        ))
      ) : (
        <h1>No se encontraron resultados</h1>
      )}
    </div>
  );
};

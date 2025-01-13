import { useState } from "react";
import dragonBallLogo from "../assets/dragon-ball.webp";

export const Header = ({ input, handleChange }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header className="sticky top-0 z-50 h-[3.5rem] w-full bg-white flex flex-row justify-between items-center px-8 overflow-x-hidden [&>*]:text-white">
      <figure className="w-[3rem]">
        <img src={dragonBallLogo} alt="DBZ logo" />
      </figure>
      <div className="relative flex flex-col items-center justify-center w-full md:w-full lg:w-fit mx-auto">
        <div className="overflow-hidden flex w-full">
          <input
            id="input-search"
            type="text"
            className="input-search pl-4 py-2 text-sm outline-none bg-[var(--primary-bg)] transition-all w-[100%] lg:w-[22rem]"
            placeholder="Search character..."
            onChange={handleChange}
            value={input}
          />
          <button className="flex items-center justify-center px-4 bg-[var(--primary-bg)]">
            <svg
              className="h-4 w-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
        {/* {value && (
            <div className="absolute flex flex-col gap-y-2 top-full left-0 px-4 py-2 w-full border bg-white [&>*]:text-black">
              {isLoading ? (
                <span>Buscando...</span>
              ) : data.length > 0 ? (
                data.map((city, index) => (
                  <div
                    onClick={() => handleSelectCity(city)}
                    key={index}
                    className="flex flex-row gap-x-4 items-center p-2 border-b border-grey-500 cursor-pointer hover:font-bold transition-all"
                  >
                    <figure className="size-[1rem]">
                      <img src={locationBlack} alt={index} />
                    </figure>
                    <span>{city.name}</span>
                    <span>{city.sys.country}</span>
                  </div>
                ))
              ) : (
                <div>
                  No se encontraro resultados. Por favor, verifica que el lugar
                  este completo o que no contenga errores ortograficos.
                </div>
              )}
            </div>
          )} */}
      </div>
      <div
        className="[&>*]:text-[var(--primary-bg)] text-xl lg:text-2xl flex flex-row items-center justify-center gap-x-[1px] font-semibold cursor-pointer transition duration-500"
        /* onClick={handleShow} */
      >
        <span>M</span>
        <div className="flex flex-col items-center justify-between center [&>span]:w-full [&>span]:h-[3px] [&>span]:bg-[var(--primary-bg)] size-[1rem] mx-[2px]">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>N</span>
        <span>U</span>
      </div>

      <div
        className={`fixed top-0 ${
          show ? "right-0" : "right-[-30rem]"
        } h-dvh w-[30rem] bg-[#ccc] transition-all duration-500`}
      ></div>
    </header>
  );
};

/* eslint-disable react/prop-types */
import { useState } from "react";
import dragonBallLogo from "../assets/dragon-ball.webp";
import Hidden from "../assets/hidden.svg";
import { useRef } from "react";
import { navigate } from "wouter/use-browser-location";
import ShenLong from "../assets/shen-long.webp";

export const Header = ({ input, handleChange, resetInput }) => {
  const [show, setShow] = useState(false);
  const genderRef = useRef(null);
  const raceRef = useRef(null);
  const affiliationRef = useRef(null);

  const handleShow = () => {
    setShow(!show);
  };

  const handleFilters = () => {
    let gender = genderRef.current.value;
    let race = raceRef.current.value;
    let affiliation = affiliationRef.current.value;

    resetInput();

    let dinamicQuerys = `/?${gender ? `&gender=${gender}` : ""}${
      race ? `&race=${race}` : ""
    }${affiliation ? `&affiliation=${affiliation}` : ""}`;

    navigate(dinamicQuerys, {
      replace: true,
    });
  };

  return (
    <header className="sticky top-0 z-50 h-fit w-full bg-white flex flex-row justify-between items-center gap-x-8 md:gap-0 px-4 lg:px-8 py-2 overflow-x-hidden [&>*]:text-white">
      <figure className="w-[3rem] hidden md:block">
        <img src={dragonBallLogo} alt="DBZ logo" />
      </figure>
      <div className="relative flex flex-col items-center justify-center w-full md:w-fit mx-auto">
        <div className="overflow-hidden flex w-full bg-[var(--primary-bg)]">
          <input
            id="input-search"
            type="text"
            className="input-search pl-4 py-2 text-sm outline-none bg-[var(--primary-bg)] transition-all w-full md:w-[22rem]"
            placeholder="Search character..."
            onChange={handleChange}
            value={input}
          />
          <button className="flex items-center justify-center px-4 bg-[var(--primary-bg)] cursor-default">
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
      </div>
      <div
        className="[&>*]:text-[var(--primary-bg)] text-xl lg:text-2xl flex flex-row items-center justify-center gap-x-[1px] font-semibold transition duration-500 cursor-pointer"
        onClick={handleShow}
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
          show
            ? "right-0"
            : "right-[-18rem] md:right-[-23rem] lg:right-[-30rem]"
        } h-dvh w-[18rem] md:w-[23rem] lg:w-[30rem] bg-slate-800 transition-all duration-300 p-6 flex flex-col gap-y-8`}
      >
        <figure className="size-[1.5rem] cursor-pointer" onClick={handleShow}>
          <img src={Hidden} alt="hidden" />
        </figure>
        <div className="flex flex-col gap-y-4 p-4 lg:p-10 grow">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-center">
            Filtros
          </h3>
          <div className="h-[1px] w-full bg-[#ccc]"></div>
          <div className="flex flex-col gap-x-4 [&>form>label]:text-sm [&>form>label]:lg:text-base [&>form]:w-full [&>form]:lg:w-[80%] [&>form]:mx-auto h-full">
            <form>
              <label
                className="block mb-2 font-medium text-white"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none border-none"
                ref={genderRef}
                defaultValue={"-"}
              >
                <option value="">-</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Unknown">Unknown</option>
              </select>
            </form>

            <form>
              <label
                className="block mb-2 font-medium text-white"
                htmlFor="race"
              >
                Race
              </label>
              <select
                id="race"
                className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none border-none"
                ref={raceRef}
                defaultValue={"-"}
              >
                <option value="">-</option>
                <option value="Saiyan">Saiyan</option>
                <option value="Namekian">Namekian</option>
                <option value="Human">Human</option>
                <option value="Majin">Majin</option>
                <option value="Frieza Race">Frieza Race</option>
                <option value="Jiren Race">Jiren Race</option>
                <option value="Android">Android</option>
                <option value="God">God</option>
                <option value="Angel">Angel</option>
                <option value="Evil">Evil</option>
                <option value="Unknown">Unknown</option>
                <option value="Nucleico Benigno">Nucleico Benigno</option>
                <option value="Nucleico">Nucleico</option>
              </select>
            </form>

            <form>
              <label
                className="block mb-2 font-medium text-white"
                htmlFor="affiliation"
              >
                Affiliation
              </label>
              <select
                id="affiliation"
                className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none border-none"
                ref={affiliationRef}
                defaultValue={"-"}
              >
                <option value="">-</option>
                <option value="Z Fighter">Z Fighter</option>
                <option value="Red Ribbon Army">Red Ribbon Army</option>
                <option value="Namekian Warrior">Namekian Warrior</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Army of Frieza">Army of Frieza</option>
                <option value="Other">Other</option>
                <option value="Prider Troopers">Prider Troopers</option>
                <option value="Assistant of Vermoud">
                  Assistant of Vermoud
                </option>
                <option value="Assistant of Beerus">Assistant of Beerus</option>
                <option value="Villain">Villain</option>
              </select>
            </form>
            <div className="flex flex-col mt-4 gap-y-4">
              <div className="h-[1px] w-full bg-[#ccc]"></div>
              <button
                onClick={handleFilters}
                className="bg-[var(--secondary-color)] mt-4 text-sm lg:text-base rounded-md p-2 font-bold text-white"
              >
                RESET
              </button>
              <button
                onClick={handleFilters}
                className="bg-[var(--secondary-color)] text-sm lg:text-base rounded-md p-2 font-bold text-white"
              >
                APPLY
              </button>
            </div>
            <figure className="hidden lg:block w-[50%] m-auto">
              <img src={ShenLong} alt="ShenLong" className="my-12" />
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
};

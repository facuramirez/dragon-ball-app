import dragonBallPresentation from "../assets/dragon-ball-presentation.webp";
import Favicon_rojo from "../assets/Favicon_rojo.svg";
import { DragonGrid } from "./DragonGrid";

export const DragonMain = ({ input }) => {
  return (
    <main className="flex flex-col gap-y-16 items-center justify-center text-white grow">
      <div className="flex flex-col gap-y-2 items-center">
        <figure className="flex flex-col items-center w-[min(40rem,100%)]">
          <img src={dragonBallPresentation} alt="Dragon Ball" className="" />
          <figcaption className="flex flex-col items-center gap-y-2">
            <p className="text-2xl lg:text-4xl text-[var(--primary-color)]">
              The Dragon Ball API
            </p>
          </figcaption>
        </figure>
        <div className="flex flex-row gap-x-4 items-center justify-center">
          <p className="text-base lg:text-xl">by Facudev</p>
          <figure className="size-[2rem]">
            <img src={Favicon_rojo} alt="Facudev Logo" />
          </figure>
        </div>
      </div>
      <DragonGrid input={input} />
    </main>
  );
};

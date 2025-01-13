import logo from "../assets/Favicon_rojo.svg";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-center items-center gap-y-2 lg:gap-4 py-2 bg-[white] w-full text-black">
      <figure className="size-[1.5rem]">
        <img src={logo} alt="Facudev" />
      </figure>
      <span>Desarrollado por Facudev</span>
      <span className="hidden lg:block">-</span>
      <span>
        Visita mi web{" "}
        <a
          href="https://facudev.netlify.app"
          target="_blank"
          className="hover:underline"
        >
          aquí
        </a>
      </span>
    </footer>
  );
};

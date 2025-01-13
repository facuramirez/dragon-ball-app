export const Loader = () => {
  return (
    <div className="text-center text-lg lg:text-2xl flex flex-col gap-y-4 items-center justify-center">
      <span className="text-lg lg:2xl">Cargando...</span>
      <l-ripples size="80" speed="2" color="white"></l-ripples>
    </div>
  );
};

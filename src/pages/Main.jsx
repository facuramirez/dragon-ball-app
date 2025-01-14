import { Header } from "../components/Header";
import { DragonMain } from "../components/DragonMain";
import { Footer } from "../components/Footer";
import { useSearch } from "../hooks/useSearch";

export const Main = () => {
  const { input, handleChange, handleFilters, resetInput } = useSearch();

  return (
    <div className="flex flex-col gap-y-10 min-h-dvh justify-between">
      <Header
        input={input}
        handleChange={handleChange}
        handleFilters={handleFilters}
        resetInput={resetInput}
      />
      <DragonMain input={input} />
      <Footer />
    </div>
  );
};

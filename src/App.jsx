import { DragonMain } from "./components/DragonMain";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { input, handleChange } = useSearch();

  return (
    <div className="flex flex-col gap-y-10 min-h-dvh justify-between">
      <Header input={input} handleChange={handleChange} />
      <DragonMain input={input} />
      <Footer />
    </div>
  );
}

export default App;

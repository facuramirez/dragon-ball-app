import { DragonMain } from "./components/DragonMain";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex flex-col gap-y-10">
      <Header />
      <DragonMain />
    </div>
  );
}

export default App;

import "./App.css";
import CountryCapitalsGame from "./Components/CountryCapitalsGame";

function App() {
  return (
    <CountryCapitalsGame
      data={{
        India: "NewDelhi",
        China: "Beiging",
        Pakisthan: "Lahore",
        Australia: "Melborne",
      }}
    />
  );
}

export default App;

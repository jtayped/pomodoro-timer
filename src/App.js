import "./App.css";
import { Timer, Tasks } from "./containers/index";
import { Player, Socials } from "./components/index";

function App() {
  return (
    <div className="App">
      <Player />
      <Timer workTime={1500} restTime={500} pomodorosTillLongRest={4} />
      <Tasks />
      <Socials />
    </div>
  );
}

export default App;

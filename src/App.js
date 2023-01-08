import "./App.css";
import { Timer, Tasks } from "./containers/index";
import { Player } from "./components/index";

function App() {
  return (
    <div className="App">
      <Player />
      <Timer workTime={1500} restTime={500} pomodorosTillLongRest={4} />
      <Tasks />
    </div>
  );
}

export default App;

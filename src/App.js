import "./App.css";
import { Timer, Tasks } from "./containers/index";

function App() {
  return (
    <div className="App">
      <Timer workTime={1500} restTime={500} pomodorosTillLongRest={4} />
      <Tasks />
    </div>
  );
}

export default App;

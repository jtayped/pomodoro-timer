import "./App.css";
import { Timer, Tasks } from "./containers/index";
import { Socials } from "./components/index";

function App() {
  return (
    <div className="App">
      <Socials />
      <Timer workTime={1500} restTime={500} pomodorosTillLongRest={4} />
      <Tasks />
    </div>
  );
}

export default App;

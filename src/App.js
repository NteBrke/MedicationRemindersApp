import "./App.css";
import MedInputForm from "./components/MedicationForm";
import TakeMedsRemindersForm from "./components/Reminders";

function App() {
  return (
    <div className="App">
      <MedInputForm />
      <TakeMedsRemindersForm />
    </div>
  );
}

export default App;

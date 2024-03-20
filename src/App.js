import "./styles/App.css";
import MedInputForm from "./components/MedicationForm";
/* import TakeMedsRemindersForm from "./components/Reminders";
import { ToastContainer, toast } from "react-toastify"; */

import "react-toastify/dist/ReactToastify.css";
/* import SignUpForm from "./components/SignUp"; */

function App() {
  /*  const notify = () => toast("Wow so easy !"); */

  return (
    <div className="App">
      <MedInputForm />
      {/* <button onClick={notify}>Notify !</button> */}
    </div>
  );
}

export default App;

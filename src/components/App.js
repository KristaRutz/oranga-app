import "./App.css";
import SignIn from "./SignIn";
import Onboarding from "./Onboarding";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Onboarding />
      <header className="App-header">
        <h1>Project Oranga</h1>
        <SignIn />
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;

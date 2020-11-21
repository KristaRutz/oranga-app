import logo from "../assets/images/logo.svg";
import "./App.css";
import Footer from "./Footer";

import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebase from "../firebase";

const firebaseAppAuth = firebase.auth();
const providers = {
  emailProvider: new firebase.auth.EmailAuthProvider(),
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App({ user, signOut, signInWithEmail, signInWithGoogle }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <>
            <button onClick={signInWithEmail}>Sign in with email</button>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          </>
        )}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer></Footer>
    </div>
  );
}

//export default App;
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

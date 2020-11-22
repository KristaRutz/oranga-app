import React, { useState } from "react";

import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebase from "../firebase";

const firebaseAppAuth = firebase.auth();
const providers = {
  emailProvider: new firebase.auth.EmailAuthProvider(),
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function SignIn({
  setError,
  user,
  error,
  loading,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithGoogle,
}) {
  const [newSignInMode, setNewSignInMode] = useState(false);
  const [displayName, setDisplayName] = useState({ value: "" });

  const handleNameChange = (event) => {
    setDisplayName({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    //alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  if (newSignInMode) {
    return (
      <div>
        {user ? null : (
          <>
            <form>
              <div>
                <label htmlFor="name">Display Name</label>
                <input
                  name="name"
                  type="text"
                  value={displayName.value}
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input name="email" type="text"></input>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"></input>
              </div>
              <input type="submit" />
            </form>
            <p>Already have an account?</p>
            <button onClick={() => setNewSignInMode(false)}>Yes</button>
          </>
        )}
      </div>
    );
  }
  if (!newSignInMode) {
    return (
      <div>
        {loading && "Loading.."}
        {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <>
            <button onClick={signInWithEmailAndPassword}>
              Sign in with email
            </button>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <p>Create a new account?</p>
            <button onClick={() => setNewSignInMode(true)}>Yes</button>
          </>
        )}
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignIn);

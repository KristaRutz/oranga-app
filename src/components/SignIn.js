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
  const [email, setEmail] = useState({ value: "" });
  const [password, setPassword] = useState({ value: "" });

  const handleNameChange = (event) => {
    setDisplayName({ value: event.target.value });
  };
  const handleEmailChange = (event) => {
    setEmail({ value: event.target.value });
  };
  const handlePasswordChange = (event) => {
    setPassword({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(displayName.value, email.value, password.value);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((user) => {
        user
          .updateProfile({
            displayName: displayName.value,
          })
          .then(function () {
            console.log("name update successful");
          })
          .catch(function (error) {
            console.log("unsuccessful: ", error.message);
          });
        signInWithEmailAndPassword(email.value, password.value);
        setNewSignInMode(false);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        alert(errorCode, errorMessage);
      });
    console.log(user);
    event.preventDefault();
  };

  if (newSignInMode) {
    return (
      <div>
        {user ? null : (
          <>
            <form onSubmit={handleSubmit}>
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
                <input
                  name="email"
                  type="text"
                  value={email.value}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password.value}
                  onChange={handlePasswordChange}
                />
              </div>
              <input type="submit" value="create my account" />
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

import React from "react";

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
        </>
      )}
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignIn);

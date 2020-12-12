import React from "react";

import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebase from "../firebase";

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function SignIn({ user, loading, signOut, signInWithGoogle }) {
  return (
    <div>
      {loading && "Loading.."}
      {user ? (
        <button onClick={signOut}>Sign out {user.email}</button>
      ) : (
        <button
          className="authProvider-google authProvider btn"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignIn);

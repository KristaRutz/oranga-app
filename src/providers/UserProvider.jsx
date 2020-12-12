import React, { Component, createContext } from "react";
import firebase, {db, generateUserDocument} from "../firebase.js";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
  }

  componentDidMount = async () => {
    firebase.auth().onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };

  generateUserDocument = async (user) => {
    if (!user) return;
    const userRef = db.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return this.getUserDocument(user.uid);
  }

  getUserDocument = async (uid) => {
    if (!uid) return null;
    try {
      const userDocument = await db.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data(),
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  render () {
    return (<UserContext.Provider value={this.state.user}>
      {this.props.children}
    </UserContext.Provider>);
  }
}

export default UserProvider;
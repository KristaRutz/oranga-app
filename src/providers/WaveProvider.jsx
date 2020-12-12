import React, { Component, createContext } from "react";

export const WaveContext = createContext({ setWaveColor: null });

class WaveProvider extends Component {
  state = {
    state: this.state,
    setWaveColor: this.colorWave,
  }

  componentDidMount =  () => {
    firebase.auth().onAuthStateChanged( userAuth => {
      this.setState({ user: userAuth });
    });
  };

  colorWave = () => {

  }

  render () {
    return (<WaveContext.Provider value={this.state.Wave} onSetWaveColor={this.setWaveColor}>
      {this.props.children}
    </WaveContext.Provider>);
  }
}

export default WaveProvider;
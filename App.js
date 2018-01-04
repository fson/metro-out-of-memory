import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import GoogleFonts from './GoogleFonts';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  _loadAsync = async () => {
    await Font.loadAsync({ ubuntu: GoogleFonts.UbuntuCondensed.Regular });
  };

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadAsync}
          onError={console.error}
          onFinish={() => this.setState({ fontLoaded: true })}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'ubuntu' }}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

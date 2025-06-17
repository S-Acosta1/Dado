import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const App = () => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);

  const generarNumero = () => {
    const nuevoNumero = Math.floor(Math.random() * 6) + 1;
    setNumeroAleatorio(nuevoNumero);
  };

  const renderDado = () => {
    switch (numeroAleatorio) {
      case 1:
        return <Image source={require('../assets/Dice1.jpg')} style={styles.imagen} />;
      case 2:
        return <Image source={require('../assets/Dice2.jpg')} style={styles.imagen} />;
      case 3:
        return <Image source={require('../assets/Dice3.jpg')} style={styles.imagen} />;
      case 4:
        return <Image source={require('../assets/Dice4.jpg')} style={styles.imagen} />;
      case 5:
        return <Image source={require('../assets/Dice5.jpg')} style={styles.imagen} />;
      case 6:
        return <Image source={require('../assets/Dice6.jpg')} style={styles.imagen} />;
      default:
        return <Text style={styles.texto}>Toca para tirar el dado 🎲</Text>;
    }
  };

  return (
    <View style={styles.container} onTouchEnd={generarNumero}>
      {renderDado()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imagen: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  texto: {
    fontSize: 24,
  },
});

export default App;

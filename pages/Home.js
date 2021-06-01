import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [play, setPlay] = useState(false);

  if (play) {
    return (
      <ImageBackground
        source={require('./../assets/ROCK_PAPER_SCISSORS_1920X1200.jpg')}
        style={styles.image1}
      >
        <SafeAreaView style={{ alignItems: 'center' }}>
          {/* <Text style={styles.name}>
            {'\n'}
            Rock Paper Scissors
            {'\n'}
          </Text>
          <Text style={{ fontSize: 40 }}>👊 ✋ ✌️</Text>
          <Text>{'\n\n'}</Text> */}
          <Pressable
            onPress={() => {
              navigation.navigate('InGame');
            }}
            style={styles.buttonPress}
          >
            <Text style={styles.buttonText}>
              with bot{'   '}
              <FontAwesome5 name={'robot'} size={20} />
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setPlay(false);
            }}
            style={styles.buttonPress}
          >
            <Text style={styles.buttonText}>
              back{'   '}
              <AntDesign name={'back'} size={20} />
            </Text>
          </Pressable>
        </SafeAreaView>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require('./../assets/ROCK_PAPER_SCISSORS_1920X1200.jpg')}
      style={styles.image}
    >
      <SafeAreaView style={{ alignItems: 'center', opacity: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.name}>
            {'\n'}
            Rock Paper {'\n'}Scissors{'\n'}
            <FontAwesome name="hand-rock-o" size={40} />
            {'  '}
            <FontAwesome name="hand-paper-o" size={40} />
            {'  '}
            <FontAwesome name="hand-scissors-o" size={40} />
            {'\n\n\n'}
          </Text>
          {/* <Text style={{ fontSize: 40 }}>👊 ✋ ✌️{'\n'}</Text> */}
          <Pressable
            onPress={() => {
              setPlay(true);
            }}
            style={styles.buttonPress}
          >
            <Text style={styles.buttonText}>
              play{'   '}
              <FontAwesome5 name={'play'} size={20} />
            </Text>
          </Pressable>
          <Pressable style={styles.buttonPress}>
            <Text style={styles.buttonText}>
              Sign in{'   '}
              <FontAwesome name={'sign-in'} size={20} />
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 40,
    top: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold',
    color: '#eee',
    textAlign: 'center',
  },
  buttonPress: {
    borderRadius: 15,
    backgroundColor: 'darkred',
    padding: 6,
    margin: 10,
    width: 160,
  },
  scrollview: {
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
  },
  image1: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

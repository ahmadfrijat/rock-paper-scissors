import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';

export default function About(props) {
  return (
    <ImageBackground
      source={require('./../assets/ROCK_PAPER_SCISSORS_1920X1200.jpg')}
      style={styles.image}
    >
      <SafeAreaView>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            fontWeight: '700',
            textDecorationLine: 'underline',
            marginBottom: 20,
          }}
        >
          About
        </Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.headerText}>
            What is Rock Paper Scissors? {'\n'}
          </Text>
          <Text style={styles.baseText}>
            A hand game based on luck and deception.{'\n'}
            usually played between two people, in which each player
            simultaneously forms one of three shapes with an outstretched hand.
            {'\n'}
            1. "rock" (👊).{'\n'}2. "paper" (✋).{'\n'}3. "scissors" (✌️).
            {'\n\n'}
          </Text>
          <Text style={styles.headerText}>How To Play? {'\n'}</Text>
          <Text style={styles.baseText}>
            The general rule is: rock beats scissors, scissors beat paper, and
            paper beats rock. Tie rounds doesn't count.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 15,
    marginTop: 25,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    padding: 15,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '800',
    color: 'darkred',
  },
  baseText: {
    fontSize: 20,
    fontWeight: '600',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

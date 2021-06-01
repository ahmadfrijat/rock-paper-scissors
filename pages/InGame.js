import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import { Pages } from 'react-native-pages';

export default function InGame() {
  const [score, setScore] = useState({ yourScore: 0, opponentScore: 0 });
  const [opponentMove, setopponentMove] = useState('');
  const [yourMove, setyourMove] = useState(0);

  const makeMove = () => {
    var randomMove = Math.floor(Math.random() * 3);
    switch (randomMove) {
      case 0: // Paper
        setopponentMove(require('./../assets/paper.png'));
        if (yourMove == 2) {
          setScore({
            yourScore: score.yourScore + 1,
            opponentScore: score.opponentScore,
          });
        } else if (yourMove == 0) {
          setScore({
            yourScore: score.yourScore,
            opponentScore: score.opponentScore + 1,
          });
        }
        break;
      case 1: // Rock
        setopponentMove(require('./../assets/rock.png'));
        if (yourMove == 1) {
          setScore({
            yourScore: score.yourScore + 1,
            opponentScore: score.opponentScore,
          });
        } else if (yourMove == 2) {
          setScore({
            yourScore: score.yourScore,
            opponentScore: score.opponentScore + 1,
          });
        }
        break;
      case 2: // Scissors
        setopponentMove(require('./../assets/scissor.png'));
        if (yourMove == 0) {
          setScore({
            yourScore: score.yourScore + 1,
            opponentScore: score.opponentScore,
          });
        } else if (yourMove == 1) {
          setScore({
            yourScore: score.yourScore,
            opponentScore: score.opponentScore + 1,
          });
        }
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.playerStats}>{'\n'}Bot</Text>
        <Text style={styles.playerStats}>Score: {score.opponentScore}</Text>
      </View>
      <View style={styles.botView}>
        <BotView image={opponentMove}></BotView>
      </View>
      <Text style={{fontSize:30}}>_________________{'\n'}</Text>
      <View>
        <Text style={styles.playerStats}>You</Text>
        <Text style={styles.playerStats}>Score: {score.yourScore}</Text>
      </View>
      <View style={styles.playerView}>
        <PlayerView
          score={score.yourScore}
          move={makeMove}
          selectMove={setyourMove}
        ></PlayerView>
      </View>
    </SafeAreaView>
  );
}

const PlayerView = (prop) => {
  return (
    <>
      <View>
        <Pages
          indicatorColor="rgb(0, 0, 0)"
          onScrollEnd={(index) => {
            prop.selectMove(index);
          }}
        >
          <Image
            source={require('./../assets/rock.png')}
            style={styles.playerMove}
          />
          <Image
            source={require('./../assets/paper.png')}
            style={styles.playerMove}
          />
          <Image
            source={require('./../assets/scissor.png')}
            style={styles.playerMove}
          />
        </Pages>
      </View>
      <Text>{'\n'}</Text>
      <View>
        <Pressable
          onPress={() => {
            prop.move();
          }}
        >
          <Text style={styles.attack}>ATTACK!</Text>
        </Pressable>
      </View>
    </>
  );
};

const BotView = (prop) => {
  return (
    <View>
      <Image source={prop.image} style={styles.opponentMove} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
  },
  opponentMove: {
    resizeMode: 'contain',
    height: 130,
    width: 150,
    margin: 10,
  },
  playerMove: {
    resizeMode: 'contain',
    height: '75%',
    width: '100%',
    marginTop: 20,
  },
  playerStats: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    fontVariant: ['proportional-nums'],
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'relative',
  },
  playerView: {
    flex: 1,
  },
  botView: {
    flex: 1,
  },
  container: {
    display: 'flex',
    flex: 0.8,
    margin: 5,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    padding: 20,
    margin: 10,
    alignItems: 'center',
  },
  attack: {
    padding: 15,
    width:150,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    borderRadius: 14,
    color: '#eee',
    backgroundColor: 'darkred',
    overflow: 'hidden',
    alignSelf: 'center',
  },
});

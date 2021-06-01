import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Pages } from 'react-native-pages';

export default function InGame() {
    const [score, setScore] = useState({yourScore: 0, opponentScore: 0});
    const [opponentMove, setopponentMove] = useState('');
    const [yourMove, setyourMove] = useState(0);
    const makeMove = () => {
        var randomMove = Math.floor(Math.random() * 3);
        switch (randomMove) {
            case 0: // Paper
                setopponentMove(require('./../assets/paper.png'))
                if (yourMove == 2) {
                    setScore({yourScore: score.yourScore + 1, opponentScore: score.opponentScore})
                }
                else if (yourMove == 1) {
                    setScore({yourScore: score.yourScore, opponentScore: score.opponentScore + 1})
                }
                break;
            case 1: // Rock
                setopponentMove(require('./../assets/rock.png'))
                if (yourMove == 0) {
                    setScore({yourScore: score.yourScore + 1, opponentScore: score.opponentScore})
                }
                else if (yourMove == 2) {
                    setScore({yourScore: score.yourScore, opponentScore: score.opponentScore + 1})
                }
                break;
            case 2: // Scissors
                setopponentMove(require('./../assets/scissor.png'))
                if (yourMove == 1) {
                    setScore({yourScore: score.yourScore + 1, opponentScore: score.opponentScore})
                }
                else if (yourMove == 0) {
                    setScore({yourScore: score.yourScore, opponentScore: score.opponentScore + 1})
                }
                break;
        }    
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.playerStats}>Bot {score.opponentScore}</Text> 
            </View>
            <View style={styles.botView}>
                <BotView top={0} image={opponentMove}></BotView>
            </View>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 10}}/>
            <View style={styles.playerView}>
                <PlayerView score={score.yourScore} move={makeMove} selectMove={setyourMove}></PlayerView>
            </View>
            <View>
                <Text style={styles.playerStats}>You {score.yourScore}</Text> 
            </View>
        </SafeAreaView>
    )
}

const PlayerView = (prop) =>{
    return (
            <View>
                <Pages indicatorColor="rgb(0, 0, 0)" onScrollEnd={(index) => {
                    prop.selectMove(index)
                }}>
                    <Image source={require('./../assets/paper.png')} style={styles.playerMove}/>
                    <Image source={require('./../assets/rock.png')} style={styles.playerMove}/>
                    <Image source={require('./../assets/scissor.png')} style={styles.playerMove}/>
                </Pages>
                <View>
                    <Pressable onPress={() => {
                        prop.move()
                    }}> 
                        <Text style={styles.attack}>ATTACK!</Text>
                    </Pressable>
                </View>
                {/* <Text style={styles.playerStats}>{prop.name}  {prop.score}</Text> */}
                
            </View>
    )
}

const BotView = (prop) =>{
    return (
        <View>
            {/* <Text style={styles.title}>{prop.name}   {prop.score}</Text> */}
            <Image source={prop.image} style={styles.opponentMove}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: "center",
        position: 'relative'
    },
    opponentMove: {
        resizeMode: "contain",
        height: 130,
        width: 150,
        margin: 10,
        //resizeMode: 'contain',
        //padding: 10,
        //textAlign: "center",
    },  
    playerMove: {
        resizeMode: "contain",
        height: "100%",
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    playerStats: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: "center",
        fontVariant: ["proportional-nums"],
        // textAlignVertical: 'bottom'
    },  
    score: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        position: 'relative'
    },
    playerView: {
        flex: 1,
        // borderWidth: 1,
    },
    botView: {
        flex: 1,
        // borderWidth: 1,
    },
    container: {
        flex: 1,
        margin: 5,
        justifyContent: "space-evenly",
        flexDirection: "column",
        padding: 20,
        margin: 10,
        alignItems: "center"
    },
    attack: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 14,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor:'red',
        overflow: 'hidden',
        alignSelf:'center'
    }
});
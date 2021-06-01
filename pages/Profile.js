import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { firebase } from '../firebase/config';

const HEADER_EXPANDED_HEIGHT = 300;
const HEADER_COLLAPSED_HEIGHT = 60;

const db = firebase.firestore();
export default function Profile() {
    const [scrollY, setScrollY] = useState(new Animated.Value(0))
    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    });
    const [username, setUsername] = useState("");
    const [mmr, setmmr] = useState(0);
    const [matchHistory, setMatchHistory] = useState([]);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
        } else {
        }
    });

    if (global.user) {
        // signed in

        db.collection('users').doc(global.user.uid).get().then((doc) => {
            setUsername(doc.data().username);
            setmmr(doc.data().mmr); 
        })

        db.collection('users').doc(global.user.uid).collection('matchHistory').get().then((querySnapshot) => {
            var history = [];

            querySnapshot.forEach((doc) => {
                var tmp = {
                    opponent: doc.data().opponent,
                    opponentScore: doc.data().opponentScore,
                    order: doc.data().order,
                    score: doc.data().score
                };
                history.push(tmp);
            }); 
            setMatchHistory(history);
        })

        

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}> 
                <Animated.View style={styles.topSection}>
                    <Pressable 
                        onPress={()=>{
                            
                        }}
                        style={({ pressed }) => [
                            {
                              backgroundColor: pressed
                                ? 'rgb(210, 230, 255)'
                                : 'white'
                            },
                            styles.buttonPress
                        ]}
                    >
                        <Image style={styles.profileImage} source={require('./../assets/paper.png')}/>
                    </Pressable>
                    <Text style={styles.username}>{ username }</Text>
                    {/* <Image style={styles.rankImage} source={require('./../assets/rank.png')}/> */}
                    <Text style={{fontSize: 25, margin: 40}}>mmr: { mmr }</Text>
                    <Text style={{fontSize: 25, fontWeight: "bold", alignSelf:"center"}}>match history</Text>
                </Animated.View>
                <FlatList style ={styles.matchHistory} 
                    data={ matchHistory }
                    renderItem={({item}) => (
                        <View style={{flex:1, flexDirection:'row'}}>
                            <Text style={[styles.item ,{paddingRight:20}]}>{ item.opponent } vs { username }</Text>
                            <Text style={[styles.item, {flex: 1, textAlign:'right'}]}>{ item.score }-{ item.opponentScore }</Text>
                        </View>)}
                />
                </ScrollView>
            </SafeAreaView>
        )
    } else {
        // signed out
        return (
            <SafeAreaView style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{fontSize: 25}}>sign in to see your profile!</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        resizeMode: 'contain',
        marginTop: 40
    },
    rankImage: {
        marginTop: 50,
        width: 200,
        height: 200,
        overflow: "hidden",
        resizeMode: 'contain'
    },
    username: {
        fontSize: 40
    },
    container: {
        flex: 1,
        width:"100%",
        height: "100%",
    },
    topSection: {
        alignItems: "center", 
        marginBottom: 20
    },
    matchHistory: {
        margin: 10
    },
    item:{
        marginVertical:5,
        fontSize: 18,
        backgroundColor:'yellow',
        padding: 10
    }
});
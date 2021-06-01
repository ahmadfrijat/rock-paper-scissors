import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';

export default function About(props) {

    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollView}> 
                <Text style={styles.headerText}>What is Rock Paper Scissors? </Text>
                <Text style={styles.baseText}>A game based on luck and deception.</Text>
                <Text style={styles.baseText}>It can have more than 2 players per game.</Text>
                <Text style={styles.baseText}>Usually played out either by rounds or by elimination.</Text>

                <Text style={styles.headerText}>How To Play: </Text>
                <Text style={styles.baseText}>Each player must pick between three items: rock, paper or scissors.</Text>
                <Text style={styles.baseText}>If a player plays rock and the other plays paper, paper wins. And so on...</Text>
                <Text style={styles.baseText}>The general rule is: rock beats scissors, scissors beat paper, and paper beats rock. </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 10,
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "yellow",
        padding: 15
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    baseText: {
        fontSize: 30,
    },
});

import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Pressable, Image, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import About from './About'
import { NavigationContainer } from '@react-navigation/native';


export default function Home({ navigation }) {

    const [play, setPlay] = useState(false);
    const [refreshPage, setRefreshPage] = useState("");

    if (global.user) {

        console.log('signed into home page')
        // signed in
        if (play) {
            return (
                <SafeAreaView style={{ alignItems: 'center' }}>
                    <Text style={styles.name}> rock paper scissors {"\n"}{"\n"}</Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('InGame')
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
                        <Text style={styles.buttonText}>vs bots</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('InGameMulti')
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
                        <Text style={styles.buttonText}>multi- player</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setPlay(false);
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
                        <Text style={styles.buttonText}>back</Text>
                    </Pressable>
                    <View style={{ flex: 1, width: "100%" }}>
                        <View style={{ flex: 1, width: "100%", flexDirection: 'row' }}>
                            <Image source={require('./../assets/scissor.png')} style={{ width: "50%", resizeMode: 'contain', marginTop: 50 }} />
                            <Image source={require('./../assets/paper.png')} style={{ width: "50%", resizeMode: 'contain', marginTop: 50 }} />
                        </View>
                        <Image source={require('./../assets/rock.png')} style={{ width: "70%", resizeMode: 'contain' }} />
                    </View>
                </SafeAreaView>
            )
        }

        return (
            <SafeAreaView style={{ alignItems: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.name}> rock paper scissors {"\n"}{"\n"}</Text>
                    <Pressable
                        onPress={() => {
                            setPlay(true);
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
                        <Text style={styles.buttonText}>play</Text>
                    </Pressable>
                    <View style={{ flex: 1, width: "100%" }}>
                        <View style={{ flex: 1, width: "100%", flexDirection: 'row' }}>
                            <Image source={require('./../assets/scissor.png')} style={{ width: "50%", resizeMode: 'contain', marginTop: 50 }} />
                            <Image source={require('./../assets/paper.png')} style={{ width: "50%", resizeMode: 'contain', marginTop: 50 }} />
                        </View>
                        <Image source={require('./../assets/rock.png')} style={{ width: "70%", resizeMode: 'contain' }} />
                    </View>
                </View>
            </SafeAreaView>
        )
    } else {
        // signed out
        if (play) {
            return (
                <SafeAreaView style={{ alignItems: 'center' }}>
                    <Text style={styles.name}> rock paper scissors {"\n"}{"\n"}</Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('InGame')
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
                        <Text style={styles.buttonText}>vs bots</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setPlay(false);
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
                        <Text style={styles.buttonText}>back</Text>
                    </Pressable>
                    <View style={{ flex: 1, width: "100%" }}>
                        <View style={{ flex: 1, width: "100%", flexDirection: 'row' }}>
                            <Image source={require('./../assets/scissor.png')} style={{ width: "50%", resizeMode: 'contain', marginTop: 50 }} />
                            <Image source={require('./../assets/paper.png')} style={{ width: "50%", resizeMode: 'contain', marginTop: 50 }} />
                        </View>
                        <Image source={require('./../assets/rock.png')} style={{ width: "70%", resizeMode: 'contain' }} />
                    </View>
                </SafeAreaView>
            )
        }

        return (
            <SafeAreaView style={{ alignItems: 'center' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.name}> rock paper scissors {"\n"}{"\n"}</Text>
                    <Pressable
                        onPress={() => {
                            setPlay(true);
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
                        <Text style={styles.buttonText}>play</Text>
                    </Pressable>
                    <View style={{ flex: 1, width: "100%" }}>
                        <View style={{ flex: 1, width: "100%", flexDirection: 'row' }}>
                            <Image source={require('./../assets/scissor.png')} style={{ width: "50%", resizeMode: 'contain', marginTop: 50 }} />
                            <Image source={require('./../assets/paper.png')} style={{ width: "50%", resizeMode: 'contain', marginTop: 50 }} />
                        </View>
                        <Image source={require('./../assets/rock.png')} style={{ width: "70%", resizeMode: 'contain' }} />
                    </View>
                </View>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    name: {
        fontSize: 35,
        top: 20,
        fontWeight: 'bold',
        width: "100%",
        textAlign: 'center'
    },
    buttonText: {
        fontSize: 25,
        padding: 10,
        textAlign: 'center'
    },
    buttonPress: {
        borderRadius: 15,
        backgroundColor: 'pink',
        padding: 6,
        margin: 10,
        width: "40%"
    },
    scrollview: {
        marginHorizontal: 10
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});
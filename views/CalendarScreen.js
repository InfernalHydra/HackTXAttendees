import React, {Component} from 'react'
import { StatusBar, SafeAreaView, Text } from 'react-native'

export default class CalendarScreen extends Component {
    // Actual login stuff
    // Login sends request to verify in normal manner (check user exists + bcrypt)
    // If valid login, create randon ass key
    render() {
        return (
            <>
                <StatusBar barStyle='dark-content' />
                <SafeAreaView style={{flex : 1, backgroundColor: "#00FF00"}}>
                    <Text>calendar</Text>
                </SafeAreaView>
            </>
        );
    }
}
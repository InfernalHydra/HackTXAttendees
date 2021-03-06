import React, {useState, useEffect, useContext} from 'react';
import AuthContext from '../context/AuthContext';
import {StatusBar, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

export default function({navigation}) {
    const {email, authToken} = useContext(AuthContext)
    const [results, setResults] = useState([]);

    useEffect(() => {
        let payload = {email, authToken}
        let url = new URL('http://10.0.2.2:3000/results');
        Object.keys(payload).forEach(key => url.searchParams.append(key, payload[key]))

        const subscription = setInterval(() => {
            fetch(url,{
                method: 'GET',
            }).then((res) => res.json()).then((data) => {
                if(data.code === 200) {
                    setResults(data.results);
                }
                else {
                    Alert.alert(
                        "Error",
                        "Unable to push results to server. " + data.message,
                        [
                            {
                                text: "Ok",
                                onPress: ()=>{navigation.navigate("My Profile")}
                            }
                        ]
                    );
                }
            }).catch(err => alert(err))
        }, 1000);

        return () => {clearInterval(subscription)}
    },[]);

    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={{flex : 1, backgroundColor : "#00FF00"}}>
                <Text>Results wahoo</Text>
                {
                    results.map((user, index) => {
                        return <Text key={index} >{user.email}</Text>   
                    })
                }
            </SafeAreaView>
        </>
    )
}

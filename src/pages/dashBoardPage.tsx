import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper'


export default class DashboardPage extends Component {



    constructor(props) {
        super(props);
        this.state = {
            userName: '', passWord: ''
        }
    }


    render() {
        const dd = [{
            "id": 1,
            "name": "test1",
            "age": "11",
            "gender": "male",
            "email": "test1@gmail.com",
            "phoneNo": "9415346313"
        },
        {
            "id": 2,
            "name": "test2",
            "age": "12",
            "gender": "male",
            "email": "test2@gmail.com",
            "phoneNo": "9415346314"
        },
        {
            "id": 3,
            "name": "test3",
            "age": "13",
            "gender": "male",
            "email": "test3@gmail.com", "phoneNo": "9415346315"
        },
        {
            "id": 4,
            "name": "test4",
            "age": "14",
            "gender": "male",
            "email": "test4@gmail.com", "phoneNo": "9415346316"
        },
        {
            "id": 5,
            "name": "test5",
            "age": "15",
            "gender": "male",
            "email": "test5@gmail.com", "phoneNo": "9415346317"
        },
        {
            "id": 6,
            "name": "test6",
            "age": "16",
            "gender": "male",
            "email": "test6@gmail.com", "phoneNo": "9415346318"
        }
        ]


        return (
            <View style={styles.container}>

                <FlatList
                    data={dd}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handlerRefresh}
                    renderItem={({ item }) => (
                        <View style={{ elevation: 2, borderWidth:0.5, marginTop: 10 }}>


                            <Text>
                                Name : {item.name}
                            </Text>
                            <Text>
                                Age : {item.age}
                            </Text>
                            <Text>
                                Gender: {item.gender}
                            </Text>
                            <Text>
                                Email: {item.email}
                            </Text>

                        </View>)} />


            </View>

        );
    }
    VerifyLogin(): void {
        if (this.state.UserName == 'hruday@gmail.com' && this.state.Password == 'hruday123') {
            Alert.alert('Valid Input')
        }
        else {
            Alert.alert('Invalid Input')
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
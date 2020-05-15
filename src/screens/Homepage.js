import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Homepage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={styles.appbarStyles}>
                    <TouchableOpacity onPress={() => navigate('Root')} >
                        <Icon name="bars" size={30} color="white" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold', marginLeft: 100 }}>E-shop</Text>
                    <Icon name="search" style={{ marginLeft: 80 }} size={20} color="white" />
                    <Icon name="shopping-cart" style={{ marginLeft: 20 }} size={20} color="white" />
                </View>
                <ScrollView style={styles.indicators}>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', marginLeft: 20 }}>Lalit</Text></TouchableOpacity>

                </ScrollView>

                <View>
                </View>
                <View>
                    <Button title="tabmenu" onPress={()=>navigate('Tab')} />
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    appbarStyles: {
        flex: 0.1,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 5,

    },
    indicators: {
        backgroundColor: 'blue',

    }
})
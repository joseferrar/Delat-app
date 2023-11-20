import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionList from '../components/List/SectionList'

const Dashboard = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#dbd7d2' }}>
            <SectionList />
        </View>
    )
}

export default Dashboard

const style = StyleSheet.create({
    section: {
        width: 200,
        height: 50,
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: "red"
    },
    title: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    }
})
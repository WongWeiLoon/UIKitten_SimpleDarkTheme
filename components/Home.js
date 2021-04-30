import React from "react";
import {StyleSheet, } from "react-native";
import {Layout, Text, Button} from "@ui-kitten/components";

const Home = (props) => {
    return (
        <Layout style={styles.container}>
            <Text style={{fontSize: 19, marginVertical: 10}}>Dark Mode</Text>
            <Button onPress={props.toggleTheme} >
                Toggle Dark Mode
            </Button>
        </Layout>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center", 
    }
})
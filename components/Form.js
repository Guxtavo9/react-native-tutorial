import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Form = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Enter your name" />
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email" />
            <Button title="Submit" onPress={() => {
                
            }} />
        </View>
    );
};

const styles = StyleSheet.create({

    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default Form;

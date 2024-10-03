import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    // Function to handle button press
    const handlePress = (buttonValue) => {
        if (buttonValue === "=") {
            calculateResult();
        } else if (buttonValue === "C") {
            clearInput();
        } else {
            setInput(input + buttonValue);
        }
    };

    // Function to clear input
    const clearInput = () => {
        setInput("");
        setResult("");
    };

    // Function to calculate result
    const calculateResult = () => {
        try {
            const res = eval(input);
            setResult(res.toString());
        } catch (error) {
            setResult("Error");
        }
    };

    return ( <
        View style = { styles.container } >
        <
        Text style = { styles.input } > { input } < /Text> <
        Text style = { styles.result } > { result } < /Text>

        <
        View style = { styles.buttonRow } >
        <
        CalcButton title = "7"
        onPress = {
            () => handlePress("7")
        }
        /> <
        CalcButton title = "8"
        onPress = {
            () => handlePress("8")
        }
        /> <
        CalcButton title = "9"
        onPress = {
            () => handlePress("9")
        }
        /> <
        CalcButton title = "/"
        onPress = {
            () => handlePress("/")
        }
        /> < /
        View >

        <
        View style = { styles.buttonRow } >
        <
        CalcButton title = "4"
        onPress = {
            () => handlePress("4")
        }
        /> <
        CalcButton title = "5"
        onPress = {
            () => handlePress("5")
        }
        /> <
        CalcButton title = "6"
        onPress = {
            () => handlePress("6")
        }
        /> <
        CalcButton title = "*"
        onPress = {
            () => handlePress("*")
        }
        /> < /
        View >

        <
        View style = { styles.buttonRow } >
        <
        CalcButton title = "1"
        onPress = {
            () => handlePress("1")
        }
        /> <
        CalcButton title = "2"
        onPress = {
            () => handlePress("2")
        }
        /> <
        CalcButton title = "3"
        onPress = {
            () => handlePress("3")
        }
        /> <
        CalcButton title = "-"
        onPress = {
            () => handlePress("-")
        }
        /> < /
        View >

        <
        View style = { styles.buttonRow } >
        <
        CalcButton title = "C"
        onPress = {
            () => handlePress("C")
        }
        /> <
        CalcButton title = "0"
        onPress = {
            () => handlePress("0")
        }
        /> <
        CalcButton title = "="
        onPress = {
            () => handlePress("=")
        }
        /> <
        CalcButton title = "+"
        onPress = {
            () => handlePress("+")
        }
        /> < /
        View > <
        /View>
    );
}

const CalcButton = ({ title, onPress }) => ( <
    TouchableOpacity style = { styles.button }
    onPress = { onPress } >
    <
    Text style = { styles.buttonText } > { title } < /Text> < /
    TouchableOpacity >
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    input: {
        fontSize: 32,
        marginBottom: 10,
        textAlign: 'right',
        width: '80%',
    },
    result: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'right',
        width: '80%',
        color: '#888',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '80%',
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 20,
        borderRadius: 10,
        width: '22%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});
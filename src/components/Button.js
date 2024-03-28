import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = (props) => {
    const { textStyle, buttonStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle} onPress={props.buttonPress}>
            <Text style={textStyle}>Show full size</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        fontSize: 14,
        fontWeigth: '500',
        paddingTop: 6,
        paddingBottom: 6,
        color: 'white'
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'gainsboro',
        marginLeft: 7,
        marginRight: 7
    }
};

export default Button;
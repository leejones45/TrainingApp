import React from 'react';
import { Text, TouchableOpacity } from 'react-native';




const Button = () => {
    const { buttonStyle } = styles;
    
    return (
        <TouchableOpacity style={buttonStyle}>
            <Text>Click Me!</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {

    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5

    }

};

export default Button;

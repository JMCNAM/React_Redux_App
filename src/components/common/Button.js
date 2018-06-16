// Import Libraries
import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// Make Component
const Button = ({ onPress, children }) => {
        
        // Destruct styles.
        const { textStyle, 
                buttonStyle, 
                } = styles;
        return (
            
                <TouchableOpacity onPress={onPress} style={buttonStyle} >
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </TouchableOpacity>
        );
    }
// Define styles.
const styles = {
    buttonStyle: { 
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: '#007aff',
        paddingBottom: 10,
        paddingTop: 10,
    }
};

// Export Component
export { Button };
// Import Libraries
import React from 'react';
import { View, Text } from 'react-native';

// Make Component
const Header = (props) => {
    // Destruct styles.
    const { textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}
// Define styles.
const styles = {
    viewStyle: {
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
        elevation: 10,
        position: 'relative',
        shadowColor: 'black',  
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 10},
        
    },
    textStyle: {
        fontSize: 20,
    }
};

// Export Component
export { Header };
// Import Libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Make Component
class Template extends Component {
    render(){
        // Destruct styles.
        const { textStyle, viewStyle} = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>Template Component</Text>
            </View>
        );
    }
}
// Define styles.
const styles = {
    viewStyle: {    
    },
    textStyle: {
        fontSize: 20,
    }
};

// Export Component
export default Template;
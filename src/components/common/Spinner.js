// Import Libraries
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

// Make Component
const Spinner = (size)=>{
    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator />
        </View>
    );
}
// Define styles.
const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

// Export Component
export { Spinner };
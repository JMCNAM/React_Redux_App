import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { connect } from 'react-redux';
import { 
    emailChanged, 
    passwordChanged,
    loginUser
 } from '../actions'; // Action creators.

class LoginForm extends Component {
    onEmailChange(text){
        // console.log(this.props);
        this.props.emailChanged(text);
    };
    onPasswordChange(text){
        this.props.passwordChanged(text);
    };
    onButtonPress(){
        // LoginUser action expects object with props.
        const { email, password } = this.props;
        this.props.loginUser({email, password});
    };
    renderButton(){
        console.log('Rendering Button: '+ this.props.loading);
        if (this.props.loading){
            console.log('Rendering Spinner: '+ this.props.loading);
            return <Spinner size="large"/>;
        } else {
            return(
                <Button
                onPress={this.onButtonPress.bind(this)}
                >
                Login
            </Button>
            );
        };
    };
    renderError(){
        //console.log(this.props.error);
        if(this.props.error){
            return (
                <View style={{ backgroundColor: "white" }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label='Email:'
                        placeholder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password:'
                        placeholder='password'
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
} 
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { // Gives component access to this.props.email.
        email,
        password,
        error,
        loading
    }
}
// Wired up action creator function to this LoginForm component.
export default connect(mapStateToProps, {
     emailChanged, passwordChanged, loginUser, 
     })(LoginForm);


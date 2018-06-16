import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from "./common";
import { connect } from 'react-redux';
import { 
    emailChanged, 
    passwordChanged,
    loginUser
 } from '../actions'; // Action creators.

class LoginForm extends Component {
    // Event handler calls action creator with new text.
    onEmailChange(text){
        // console.log(this.props);
        this.props.emailChanged(text);
    }
    // Event handler for password input.
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        // LoginUser action expects object with props.
        const { email, password } = this.props;
        this.props.loginUser({email, password});
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
                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                        >
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = state => {
    return { // Gives component access to this.props.email.
        email: state.auth.email,
        password: state.auth.password
    }
}
// Wired up action creator function to this LoginForm component.
export default connect(mapStateToProps, {
     emailChanged, passwordChanged, loginUser
     })(LoginForm);
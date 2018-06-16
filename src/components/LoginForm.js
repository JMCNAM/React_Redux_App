import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from "./common";
import { connect } from 'react-redux';
import { emailChanged } from '../actions'; // Action creator.

class LoginForm extends Component {
    // Event handler calls action creator with new text.
    onEmailChange(text){
        console.log(this.props);
        this.props.emailChanged(text);
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
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = state => {
    return { // Gives component access to this.props.email.
        email: state.auth.email
    }
}
// Wired up action creator function to this LoginForm component.
export default connect(mapStateToProps, { emailChanged })(LoginForm);
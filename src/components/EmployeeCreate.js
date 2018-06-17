import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Picker } from 'react-native';
import { 
    employeeUpdate,
    employeeCreate
 } from '../actions'; 
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component {
    onButtonPress(){
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    };
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Employee Name'
                        value={this.props.name}
                        onChangeText={ value => 
                            this.props.employeeUpdate({ prop: 'name', value }) }
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-555'
                        value={this.props.phone}
                        onChangeText={ value => 
                            this.props.employeeUpdate({ prop: 'phone', value }) }
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle}>Select Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
                    >
                        <Picker.Item label='Monday' value='monday'/>
                        <Picker.Item label='Tuesday' value='tuesday'/>
                        <Picker.Item label='Wednesday' value='wednesday'/>
                        <Picker.Item label='Thursday' value='thursday'/>
                        <Picker.Item label='Friday' value='friday'/>
                        <Picker.Item label='Saturday' value='saturday'/>
                        <Picker.Item label='Sunday' value='sunday'/>
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this.onButtonPress().bind(this)}
                    >
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        alignSelf: 'center'
    }
}
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }
}
export default connect(mapStateToProps, {
    employeeUpdate, 
    employeeCreate
})(EmployeeCreate);


  
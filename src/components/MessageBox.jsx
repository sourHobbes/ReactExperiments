import React from 'react';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';
import trim from 'trim'
import theme from './Theme.js'
import Firebase from 'firebase';

var {Card} = mui;
var {palette} = theme;

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.state = {
            message: ''
        }
        this.firebaseRef = new Firebase('https://react-stack-sd.firebaseio.com/messages');
    }
    
    onChange(evt) {
        this.setState({
            message: evt.target.value
        });
    }

    onKeyUp(evt) {
        if(evt.keyCode == 13 && trim(evt.target.value) != '') {
            evt.preventDefault();
            this.firebaseRef.push({
                message: this.state.message
            });
            this.setState({
                message: ''
            })
            console.log("Sent a new message: ", evt.target.value);
        }
    }

    render() {
        console.log("The value of clicked is " + this.props.clicked)
        return (
            <Card style={{
                maxWidth: 1300,
                margin: '30px auto 30px',
                padding: 30
            }}>
                <textarea
                    value={this.state.message} 
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                    style={{
                        width: '100%',
                        borderColor:  palette.primary2Color,
                        resize: 'none',
                        borderRadius: 3,
                        minHeight: 50,
                        color: palette.white,
                        fontSize: 14,
                        outline: 'auto 0px'
                    }} 
                />
            </Card>

        );
    }
}

export default MessageBox;

import React from 'react';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';
import theme from './Theme.js'

var {Card} = mui;
var {palette} = theme;

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("The value of clicked is " + this.props.clicked)
        return (
            <Card style={{
                maxWidth: 1300,
                margin: '30px auto 30px',
                padding: 30
            }}>
                <textarea style={{
                    width: '100%',
                    borderColor:  palette.primary2Color,
                    resize: 'none',
                    borderRadius: 3,
                    minHeight: 50,
                    color: palette.white,
                    fontSize: 14,
                    outline: 'auto 0px'
                }} />
            </Card>

        );
    }
}

export default MessageBox;

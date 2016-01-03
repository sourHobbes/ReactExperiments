import React from 'react';
import mui from 'material-ui';
import theme from './Theme.js'

var {ListItem} = mui;
var {palette} = theme;

class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            clicked: true
        }
    }
    
    handleClick() {
      this.setState({clicked: !this.state.clicked});
      //console.log("The value of clicked is " + this.state.clicked)
    }

    render() {
        return (
            <ListItem style={{
                color: this.state.clicked ? palette.textColor : palette.primary2Color
            }} onClick={this.handleClick}> {this.props.channel} </ListItem>
        );
    }
}

export default Channel;

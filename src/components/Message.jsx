import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                leftAvatar={<Avatar src="https://lh3.googleusercontent.com/-kGkHyGvjdn4/AAAAAAAAAAI/AAAAAAAABbQ/xoNcOK2Y6XA/s120-c/photo.jpg"/>}
            >{this.props.message}</ListItem>
        );
    }
}

export default Message

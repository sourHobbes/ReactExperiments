import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';
import theme from './Theme.js'

var {Card, List} = mui;
var {palette} = theme;

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: [
                'Dogs',
                'Cats'
            ]
        };
    }
    
    render() {
        var channelNodes = this.state.channels.map((channel) => {
            return (
                <Channel key={channel} channel={channel} onClick={this.state.handleClick}/>   
            ) 
        });
        
        return (
            <Card style={{
                flexGrow: 1
            }}>
                <List> 
                    {channelNodes}
                </List>
            </Card>
        );
    }
}

export default ChannelList

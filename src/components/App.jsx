import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import mui from 'material-ui'
import Theme from './Theme.js'
import ThemeManager from 'material-ui/lib/styles/theme-manager';

var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

class App extends React.Component {
    constructor() {
        super();
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(Theme)
        };
    }

    render() {
        return (
            <div>
                <AppBar title="Chat Awesomely!!"/>
                <div style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    maxWidth: 1300,
                    width: '100%',
                    margin: '30px auto 30px',
                    maxHeight: 1300,
                    height: '100%'
                }}>
                    <ChannelList />
                    <MessageList />
                </div>
                <MessageBox />
            </div>
        );
    }
}

export default App;

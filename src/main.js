import React from 'react';
import App from './components/App.jsx';
import  './main.scss';
var ReactDom = require('react-dom');

//ReactDom.render(<App />, document.getElementById('container'));

//var Button = React.createClass({
//  render: function() {
//    return (
//      <button style={{background: this.props.color}}>
//        {this.props.children}
//      </button>
//    );
//  }
//});
//
//var Message = React.createClass({
//  render: function() {
//    return (
//      <div>
//        {this.props.text} <Button color={this.props.color}>
//            Delete
//            Add
//        </Button>
//      </div>
//    );
//  }
//});
//
//var MessageList = React.createClass({
//  render: function() {
//    var color = "purple";
//    var messages = [
//                    { text : 'hello' },
//                    { text : 'namaste' }, 
//                    { text : 'guten tag' }
//                    ];
//    var children = messages.map(function(message) {
//      return <Message text={message.text} color={color} />;
//    });
//    return <div>{children}</div>;
//  }
//});

ReactDom.render(<App />, document.getElementById('container'));

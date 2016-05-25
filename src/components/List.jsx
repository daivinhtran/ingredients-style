var React = require('react');
var ListItem = require('./ListItem.jsx');

class List extends React.Component {
    render() {
        var createItem = function(text, index) {
            return (
                <ListItem key={index + text} text={text} />
            );
        };

        return (
            <ul>{this.props.items.map(createItem)}</ul>
        );
    }
}

module.exports = List;
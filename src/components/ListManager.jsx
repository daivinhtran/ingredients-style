var React = require('react');
var List = require('./List.jsx');

class ListManager extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            newItemText:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        var currentItems = this.state.items;

        currentItems.push(this.state.newItemText);

        this.setState({
            items: currentItems,
            newItemText: ''
        });
    }
    onChange(e) {
        this.setState({
            newItemText: e.target.value
        });
    }
    render() {
        var divStyle = {
            marginTop: 10,
        }

        var headingStyle = {

        }
        
        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }
        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                    <List items={this.state.items} />
                </div>
            </div>
        )
    }
}

module.exports = ListManager;
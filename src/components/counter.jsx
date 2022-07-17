import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: this.props.initCount 
    };
    

    render() {
        return <>
            <span className={this.determineBadgeColor()}>{this.formatCount()}</span>
            <button
                onClick={() => {
                    this.setState({count: this.state.count + 1})
                }}
                className="btn btn-secondary btn-sm">
                Incrementor!
            </button>
            <button 
                onClick = {() => {
                    this.setState({count: this.state.count -1})
                }}
                className="btn btn-danger btn-small m-4">
                    Delete :/</button>
            <br />
        </>
        
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : <h1>{ count }</h1>
    }

    determineBadgeColor() {
        let countClasses = "badge m-4 badge-";
        countClasses += this.state.count === 0 ? "warning" : "primary";
        return countClasses;
    }
}

export default Counter;
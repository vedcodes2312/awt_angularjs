import React, { Component } from "react";

class Counter extends Component {

    // Constructor is used to initialize state
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            count: 0
        };
    }

    // Method to increase count
    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    // Method to decrease count
    decreaseCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>

                <button onClick={this.increaseCount}>
                    Increase
                </button>

                <button onClick={this.decreaseCount}>
                    Decrease
                </button>
            </div>
        );
    }
}

export default Counter;

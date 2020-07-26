import React, { Component } from 'react'

export default class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(evt, place){
        this.props.handleChange(evt, place);
    }

    render() {
        return (
            <div>
                <div className="form-check">
                    <input 
                        value={this.props.finalPlace.value} 
                        type="checkbox" 
                        checked={this.props.finalPlace.status}
                        onChange={evt => this.handleInputChange(evt, this.props.finalPlace)}
                        className="form-check-input"/>
                    <label className="form-check-label" htmlFor={this.props.finalPlace.name}>{this.props.finalPlace.name}</label>
                </div>
            </div>
        )
    }
}

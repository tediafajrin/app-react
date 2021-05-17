import React from 'react'

export default class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.text || this.props.name}</h1>
                <input value={this.state.text} onChange={this.handleChange} />
            </div>
        )
    }
}
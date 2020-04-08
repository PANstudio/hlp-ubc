import React, { Component } from 'react'

export default class NextAnswerBtn extends Component {
    render() {
        return (
            <button className="next-answer" onClick={this.props.nextAnswer}>
                Next Answer
            </button>
        )
    }
}

import React, { Component } from 'react'

export default class NextQuestionBtn extends Component {
    render() {
        return (
            <button className="next-question" onClick={this.props.question}>
                Next Question
            </button>
        )
    }
}

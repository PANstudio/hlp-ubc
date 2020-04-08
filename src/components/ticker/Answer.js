import React, { Component } from 'react'

class Answer extends Component {
    render() {
        return (
            <div className="answer-holder">
                <div className="answer">
                    {/* <h3>Answer</h3> */}
                    <p>{this.props.answer}</p>
                </div>
            </div>
        )
    }
}

export default Answer
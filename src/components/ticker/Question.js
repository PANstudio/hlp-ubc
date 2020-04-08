import React, { Component } from 'react'

class Question extends Component {
  render() {
    return (
      <div className="question-holder">
        <div className="question">
          {/* <h3>Question</h3> */}
          <p>{this.props.question}</p>
        </div>
      </div>
    )
  }
}

export default Question
import React, { Component } from 'react'

class VanityFigure extends Component {
    render() {
        return (
            <div className="vanity-figure">
                <div class="figure">
                    <h1>{this.props.unit}</h1>
                </div>
                <div className="figure-type">
                    <h2>
                        {this.props.figureType}
                    </h2>
                </div>
            </div>
        )
    }
}


export default VanityFigure
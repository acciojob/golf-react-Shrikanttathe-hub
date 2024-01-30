import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

//     buttonClickHandler() {
//         this.setState({
//             renderBall: true
//         });//imp
//    }
    // renderBallOrButton() {
	// 	if (this.state.renderBall) {
	// 	    return <div className="ball" style={this.state.ballPosition}></div>
	// 	} else {
	// 	    return <button onClick={this.buttonClickHandler} >Start</button>
	// 	}
    // }

    // bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener("keydown", this.handleArrowRight);
    }// imp
    //new approach
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleArrowRight);
    }

    handleArrowRight = (event) => {
        if (event.key === "ArrowRight") {
            this.setState((prevState) => ({
                posi: prevState.posi + 5,
                ballPosition: { left: `${prevState.posi + 5}px` }
            }));
        }
    };

    buttonClickHandler() {
        this.setState({
            renderBall: true
        });//
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>
        } else {
            return <button onClick={this.buttonClickHandler}>Start</button>
        }
    }
    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;

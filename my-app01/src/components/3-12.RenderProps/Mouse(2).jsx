import React, { Component } from 'react'
/**
 * 마우스 커서 트래킹 행위를 <Mouse> 컴포넌트로 캡슐화 하여 
 * 어디서든 사용할 수 있게 리팩토링
 * 마우스 커서 (x,y) 위치를 저장하는 행위를 캡슐화
 */
export default class Mouse extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0};
    }
    handleMouseMove(event){
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

  render() {
    return (
        <div style={{ height: '100vh'}} onMouseMove={this.handleMouseMove}>
            {/* ...하지만 <p>가 아닌 다른것을 렌더링하려면 어떻게 해야 하나? */}
            <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        </div>
    );
  }
}

class MouseTracker extends Component {
    render(){
        return(
            <>
            <h1>Move the mouse around!</h1>
            <Mouse/>
            </>
        )
    }
}

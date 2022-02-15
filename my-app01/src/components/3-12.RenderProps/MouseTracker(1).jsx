import React, { Component } from 'react'

/**
 * 마우스 위치를 추적하는 로직
 */
class MouseTracker extends Component {
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
          <h1>Move the mouse around!</h1>
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}
export default MouseTracker;
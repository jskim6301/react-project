import React, { Component } from 'react'
/**
 render props 적용방식 - (1)
 */
class Cat extends Component {
  render(){
      const mouse = this.props.mouse;
      return (
          <img src='/cat.jpg' style={{ position: 'absolute', left: mouse.x, top: mouse.y}}/>
      );
  }
}

class Mouse extends Component {
  constructor(props){
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
            {/*
              <Mouse>가 무엇을 렌더링하는지에 대해 명확히 코드로 표기하는 대신,
              `render`     
            */}
            {this.props.render(this.state)}
            {/* <Cat mouse={this.state}/> */}
        </div>
      )
    }           
}

class MouseTracker extends Component {
    render() {
      return (
        <div>
            <h1>Move the mouse around!</h1>
            <Mouse render={mouse => (
                <Cat mouse={mouse}/>
            )}
            />
        </div>
      );
    }
  }

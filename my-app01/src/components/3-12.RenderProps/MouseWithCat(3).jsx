import React, { Component } from 'react'

/* 
    마우스 주변에 고양이 이미지가 있는 추가 기능
    <Cat mouse={{x,y}} /> prop을 통해 Cat 컴포넌트에 마우스 좌표를 전달해주고
    화면에 어떤 위치에 이미지를 보여줄지 알려줌

    1.첫번째 방법 
    <Mouse>컴포넌트의 render 메서드안에 <Cat> 컴포넌트를 넣어 렌더링하는 방법

    이러한 접근 방법은 특정 사례에서는 적용할 수 있지만, 우리가 원하는 행위의 캡슐화(마우스트래킹)
    라는 목표는 달성하지 못했다.이제 우리는 다른 사용 예제에서도 언제든지 마우스 위치를 추적할 수 있는
    새로운 component(<MouseWithCat>과 근본적으로 다른)를 만들어야 한다.

    여기에 render prop를 사용할 수 있다. <Mouse> 컴포넌트 안에 <Cat> 컴포넌트를 
    하드코딩해서 결과물을 바꾸는 대신에, <Mouse>에게 동적으로 렌더링할 수 있도록 해주는
    함수 prop을 제공하는 것이다.
*/
class Cat extends Component {
    render(){
        const mouse = this.props.mouse;
        return (
            <img src='/cat.jpg' style={{ position: 'absolute', left: mouse.x, top: mouse.y}}/>
        );
    }
}


class MouseWithCat extends Component {
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
          {
            /*
        여기서 <p>를 <Cat>으로 바꿀 수 있다. 그러나 이 경우 Mouse 컴포넌트를
        사용할 때 마다 별도의 <MouseWithSomethingElse> 컴포넌트를 만들어야 한다.
        그러므로 <MouseWithCat>는 아직 정말로 재사용이 가능한 것이 아님
            */
          }
          <Cat mouse={this.state}/>
      </div>
    )
  }
}


class MouseTracker extends Component {

    render() {
      return (
        <div>
            <h1>Move the mouse around!</h1>
            <MouseWithCat />
        </div>
      );
    }
  }

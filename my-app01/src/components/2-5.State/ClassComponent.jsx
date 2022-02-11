import React, {Component} from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
      super(props);
      this.state = { date : new Date() };
  }  

  componentDidMount(){
      this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
      clearInterval(this.timerID);
  }
  
  tick(){
      this.setState({
          date: new Date(),
      });
      // this.state.date = 'xxx'
      // 직접 state를 수정하면 컴포넌트를 다시 렌더링하지 않는다.
      // setState()를 사용
  }

  render(){
      return (
          <div>
              <h1>Hello,World!</h1>
              <h2>{this.state.date}</h2>
          </div>
      );
  }
}

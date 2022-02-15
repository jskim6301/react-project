import React from 'react'

/**
     render props 적용방식 - (2)
    만약 어떤 이유 때문에 HOC를 만들기 원한다면, 쉽게 구현가능하다
    render prop을 이용해서 일반적인 컴포넌트를 만들 수 있다.
 */

function withMouse(Component){
    return class extends React.Component{
        render(){
            return (
                <Mouse render={mouse => (
                    <Component {...this.props} mouse={mouse}/>
                )}
                />
            );
        }
    }
}
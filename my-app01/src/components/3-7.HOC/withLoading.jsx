import React, { useEffect, useState } from 'react'
/**
 * 고차 컴포넌트 : 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수
 * 
 * 1.render 메서드안에 고차 컴포넌트 사용 금지
 * - rendering 최적화를 할 때는 리액트가 항상 변경점을 본다.
 * - HOC를 쓰면 컴포넌트가 계속 재생산되면서 매번 전체 서브트리가 마운트 후 재마운트 하게된다.
 * 
 * 2.정적 메서드는 반드시 따로 복사
 * 
 * 3.ref는 전달되지 않는다.
 * ref는 실제 prop가 아닌 key이기 때문에 current값안에 래핑된 컴포넌트가 아니라 바깥쪽 컴포넌트가 생김
 * 이 문제를 해결하려면 React.forwardRef API를 사용(리액트 16.3부터 도입)
 * 
 * @param {*} Component 
 * @returns new Component
 */
export default function withLoading(Component) {
    const WithLoadingComponent = (props) => {

        const [loading,setLoading] = useState(true);
        
        useEffect(() => {
            const timer = setTimeout(() => setLoading(false),3000);
    
            return () => clearTimeout(timer);
        },[]);
        return (
          loading ? <p>Loading...</p>  : <Component {...props} />
        );
    }
    return WithLoadingComponent;
    
    
    // return WithLoadingComponent = (props) => {

    //     const [loading,setLoading] = useState(true);
        
    //     useEffect(() => {
    //         const timer = setTimeout(() => setLoading(false),3000);
    
    //         return () => clearTimeout(timer);
    //     },[]);
    //     return (
    //       loading ? <p>Loading...</p>  : <Component />
    //     );
    // }
}

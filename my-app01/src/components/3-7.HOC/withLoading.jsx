import React, { useEffect, useState } from 'react'
/**
 * HOC 적용 - 대문자 컴포넌트 변환후 리턴
 * @param {*} Component 
 * @returns 
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

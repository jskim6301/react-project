import React, { useEffect, useState } from 'react'

const withCypherList = WrappedComponent => {
  const Component = props => {

    ////// 중복되는 로직 ////// 
    const [cypherList,setCypherList] = useState();

    useEffect(() => {
        getCharacter()
        .then(res => {
            const {characters} = res.data;
            setCypherList(characters);
        })
        .catch(e => {
            console.log(e);
        })
    },[]);
    ////// 중복되는 로직 ////// 

    if(!cypherList) return <Spinner />;

    //props와 cypherList를 합친 후 전달된 Component에 같이 전달
    const combinedProps = {
        ...props,
        cypherList
    };


    return <WrappedComponent {...combinedProps} />
    // return <WrappedComponent {...props} />
  }  
  return Component;
}

export default withCypherList;

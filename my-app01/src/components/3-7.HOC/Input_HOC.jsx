import React from 'react'
import withLoading from './WithLoading'

function Input(){
  return <input defaultValue="Input"/>;
}

export default withLoading(Input);

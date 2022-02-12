import React from 'react'
import withLoading from './WithLoading';

function Button() {
  return <button>Button</button>
}

export default withLoading(Button);
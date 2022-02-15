import React from 'react'
import { createPortal } from 'react-dom';
import ThankyouDialog from './ThankyouDialog'

const Portal = (props) => {
  return createPortal(props.children,document.getElementById("portal"));
}
/**
 * ThankyouDialog 다이얼로그를 클릭해도 div가 찍히도록 
 * 이벤트 버블링이 일어난다.
 */
export default function Example() {
  return (
    <div onClick={() => console.log('div')}>
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{ position: "absolute"}}>
        <button>하하하</button>
      </div>
    </div>
  )
}

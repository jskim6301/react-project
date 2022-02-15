import React from 'react'
import ThankyouDialog from './ThankyouDialog'

/**
 * ThankyouDialog 클릭시 '하하하'버튼을 덮질 못하고 있다.
 * 
  return (
    <div>
      <div style={{ position: "absolute"}}>
        <button>하하하</button>
      </div>
      <ThankyouDialog />
    </div>
  )

  위의 코드처럼 ThankyouDialog의 순서를 바꾸면 덮힌다
  하지만 복잡한 구조의 컴포넌트일 경우 portal이 필요하다
 */
export default function Example() {
  return (
    <div>
      <ThankyouDialog />
      <div style={{ position: "absolute"}}>
        <button>하하하</button>
      </div>
    </div>
  )
}

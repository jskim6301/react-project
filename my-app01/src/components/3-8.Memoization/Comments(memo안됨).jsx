import React from 'react'
import CommentItem from './CommentItem(memo안됨)'
/**
 * onClick 함수에서 인라인 형식으로 함수를 넘기고 있다.
 * 인라인 함수를 주면 이 함수가 새로운 함수가 만들어 진다.
 * => 인라인 함수 때문에 props가 변경되고 있다.
 
 export default function Comments({commentList}) {
   return (
     <div>
       {commentList.map(comment => <CommentItem
         key={comment.title}
         title={comment.title}
         content={comment.content}
         likes={comment.likes}
         onClick={() => console.log('눌림')}
       />)}
     </div>
   )
 }

 */

/**
handleChange로 함수를 빼도 마찬가지로 최적화가 되지 않는다.
=> Comments 컴포넌트 자체가 리렌더링 되기 때문이다.
전달받은 commentList가 바뀌기 때문에(받은 props가 바뀌기 때문에) Comments도 계속 리렌더 된다.
그래서 여기서 설정한 함수(handleChange)도 계속 리렌더 된다.
==> useCallback을 사용
*/
export default function Comments({commentList}) {
    const handleChange = () => {
        console.log("눌림");
    }
  return (
    <div>
      {commentList.map(comment => <CommentItem
        key={comment.title}
        title={comment.title}
        content={comment.content}
        likes={comment.likes}
        onClick={handleChange}
      />)}
    </div>
  )
}






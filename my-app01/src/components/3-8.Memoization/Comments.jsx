import React, { useCallback } from 'react'
import CommentItem from './CommentItem'
/**
 *  handleChange라는 함수가 useCallback으로 메모이제이션 되었기 때문에 리렌더되지 않는다.
 */
export default function Comments({commentList}) {
    const handleChange = useCallback(() => {
        console.log("눌림");
    },[]);
  return (
    <div>
      {commentList.map(comment => (
          <CommentItem
           key={comment.title}
           title={comment.title}
           content={comment.content}
           likes={comment.likes}
           onClick={handleChange}
           />
        )
      )}
    </div>
  )
}

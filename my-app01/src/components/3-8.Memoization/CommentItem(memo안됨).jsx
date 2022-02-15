import React, {memo, Profiler} from 'react'
import './CommentItem.css';

/**
 * 성능 테스트(Profile)
 * @param {*} param0 
 * @returns 
 * 
 * memo를 적용했음에도 최적화가 안됨
 * => memoization은 props가 동일안 상태에서만 적용이 된다
 */
function CommentItem({title,content,likes, onClick}) {
    function onRenderCallback(
        id, //방금 커밋된 Profiler 트리의 "id"
        phase, // "mount" (트리가 방금 마운트된 경우) 혹은 "update"트리가 리렌더
        actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
        baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상 시간
        startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
        commitTime, // React가 해당 업데이트를 언제 커밋했는지
        interactions // 이 업데이트에 해당하는 상호작용들의 집합
    ){
        // 렌더링 타이밍을 집합하거나 로그...
        console.log(`actualDuration${title}: ${actualDuration}`);
    }
    const handleClick = () => {
        onClick();
        alert(`${title} 눌림`);
    }
    return (
        <Profiler id="CommentItem" onRender={onRenderCallback}>
            <div className='CommentItem' onClick={handleClick}>
            <span>{title}</span>
            <span>{content}</span>
            <br />
            <span>{likes}</span>
            </div>
      </Profiler>
    );
  }
  
export default memo(CommentItem);  

/*
    function CommentItem({title,content,likes}) {
        return (
                <div className='CommentItem'>
                <span>{title}</span>
                <span>{content}</span>
                <br />
                <span>{likes}</span>
                </div>
        );
    }
    
    export default memo(CommentItem);  
*/

/*
    export default function CommentItem({title,content,likes}) {
    return (
        <div className='CommentItem'>
            <span>{title}</span>
            <span>{content}</span>
            <br />
            <span>{likes}</span>
        </div>
    );
    }
*/

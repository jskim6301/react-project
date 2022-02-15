import React from 'react'
import withCypherList from './withCypherList'

const CypherList = ({cypherList}) => {
    // props인 cypherList는 withCypherList로 부터 넘겨받은 데이터
  return (
    <div>
      {
          cypherList.map(cypher => {
              return <p>{cypher.name}</p>
          })
      }
    </div>
  )
};

export default withCypherList(CypherList);

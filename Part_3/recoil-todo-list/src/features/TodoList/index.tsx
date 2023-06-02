import React from 'react';
import styled from "@emotion/styled/macro";

const TodoItem = styled.li<{ done?: boolean; selected?: boolean; }>`
  max-width: 100px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${({ done, selected }) => selected ? 'rgba(112, 71, 235, 1)' : done ? 'transparent' :  'rgba(112, 71, 235, 0.4)'};
  padding: 2px 4px;
  margin: 0;
  border-radius: 8px;
  font-size: 10px;
  text-decoration: ${({ done }) => done && 'line-through'};
  cursor: pointer;
`;

const EtcItem = styled.li`
  padding: 2px 4px;
  margin: 0;
  font-size: 10px;
  cursor: pointer;
`;

const Base = styled.div`
  list-style: none;
  margin: 36px 0 0 0;
  padding: 0;
  width: 100%;
  height: 60px;
  ${TodoItem} + ${TodoItem} {
    margin-top: 1px;
  }
  ${TodoItem} + ${EtcItem} {
    margin-top: 1px;
  }
`;

interface Todo {
    id: string;
    content: string;
    done: boolean;
    date: Date;
}

interface Props {
    items: Array<Todo>;
}

const TodoList: React.FC = () => {
    return (
        <Base>
            {

            }
            <TodoItem>

            </TodoItem>
        </Base>
    );
};

export default TodoList;
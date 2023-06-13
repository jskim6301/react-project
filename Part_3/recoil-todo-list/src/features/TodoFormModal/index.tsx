import React, {KeyboardEvent, useEffect, useRef, useState} from 'react';
import styled from "@emotion/styled/macro";
import Modal from "../../components/Modal";
import {useRecoilCallback, useRecoilState, useRecoilValue} from "recoil";
import {selectedDateState, todoListState} from "../TodoList/atom";
import {todoFormModalOpenState} from "./atom";
// import {randomUUID} from "crypto";
import { v4 as uuidv4} from 'uuid';
import {getSimpleDateFormat} from "../../utils/date";
import todoList from "../TodoList";

const ModalBody = styled.div`
  width: 100vw;
  max-width: 386px;
  padding: 8px;
`;

const Date = styled.small`
  display: block;
  color: #C9C8CC;
`;

const InputTodo = styled.input`
  padding: 16px 24px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  color: #C9C8CC;
  caret-color: #C9C8CC;
`;

const Card = styled.div`
  width: 100%;
  max-width: 370px;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  background-color: #19181A;
  ${Date} + ${InputTodo} {
    margin-top: 24px;
  }
;
`;

const TodoFormModal: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isOpen, setIsOpen] = useRecoilState(todoFormModalOpenState);

    const selectedDate = useRecoilValue(selectedDateState);
    const [todo, setTodo] = useState<string>('');


    const todoList = useRecoilValue(todoListState)
    const handleClose = () => {
        setIsOpen(false);
    };
    const reset = () => {
        setTodo('');
        inputRef.current?.focus();
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            addTodo();
            reset();
            handleClose();
        }
    }

    const addTodo = useRecoilCallback(({ snapshot, set }) => () => {
        const todoList = snapshot.getLoadable(todoListState).getValue();
        const newTodo = { id: uuidv4(), content: todo, done: false, date: selectedDate };
        set(todoListState, [...todoList, newTodo]);
    }, [todo, selectedDate, todoList]);

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <ModalBody>
                <Card>
                    <Date>{getSimpleDateFormat(selectedDate)}</Date>
                    <InputTodo ref={inputRef} placeholder="새로운 이벤트" onChange={handleChange} value={todo} onKeyPress={handleKeyPress} />
                </Card>
            </ModalBody>
        </Modal>
    );
};

export default TodoFormModal;
import React from 'react'
import styled from '@emotion/styled/macro';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { AiOutlineEllipsis } from 'react-icons/ai'

const Navigation = styled.nav``;
const PaginationItem = styled.li``;
const PaginationItemList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none; 
    ${PaginationItem} + ${PaginationItem} {
        margin-left: 98px;
    }   
`;

const Button = styled.button<{ selected?: boolean }>`
  color: ${({ selected }) => selected ? '#fff' : '#000'};
  border: 0;
  margin: 0;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: normal;
  background-color: ${({ selected }) => selected ? '#3d6afe' : '#fff'};
  cursor: pointer;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  &:hover {
    background-color: #ccc;
    color: #fff;
  }
  &:active {
    opacity: 0.8;
  }
`;


interface Props {
    count: number;
    page: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({count, page, onPageChange}) => {
    console.log("count",count);
    console.log("page",page);
    return (
        <Navigation>
            <PaginationItemList>
                <PaginationItem>
                    <Button  >button</Button>
                </PaginationItem>
            </PaginationItemList>
            
        </Navigation>
        
    );
}


export default Pagination;
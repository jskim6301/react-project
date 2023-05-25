import React from 'react'

interface UsePaginationProps {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
}

export default function usePagination({count,onPageChange, page}: UsePaginationProps) {

    const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({length}).map((_,index) => index + start);
    }
    // console.log("page>>",page)

    const startPage = 1;
    const endPage = count;

    const startPages = range(startPage,1);
    const endPages = range(count,count);
    console.log("endPages>>",endPages)


    const itemList = [
      'prev',
      // ['start-ellipsis'],
      ...startPages,
      ...endPages,
      // ['end-ellipsis'],
      'next',
    ]

    


    const items = itemList.map((item,index) => (
      typeof item === 'number' ? {
        key:index,
        onClick: () => onPageChange(item - 1),
        item,
      } : {
        key: index,
        onClick: () => onPageChange(item === 'next' ? page + 1 : page - 1),
        item  
      }
    ));


    // const items = [{
    //   key: 1,
    //   onClick: () => onPageChange(1),
    // }];


    return {items}
}

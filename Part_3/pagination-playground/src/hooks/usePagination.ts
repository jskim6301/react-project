import React from 'react'

interface UsePaginationProps {
//   count: number;
  page: number;
  onPageChange: (page: number) => void;
}

export default function usePagination({onPageChange, page}: UsePaginationProps) {
    // console.log("usePagination count",count);
    // console.log("usePagination page",page);
    // console.log("usePagination onChage",onPageChange);


  const itemList = [
    'prev',
    1,
    'next',
  ]

  const items = itemList.map((item,index) => (
    typeof item === 'number' ? {
      key:index,
      onClick: () => onPageChange(1),
      item,
    } : {
      key: index,
      onClick: () => onPageChange(item === 'next' ? page + 1 : page - 1),
      item  
    }
  ));

  // const items = [{
  //   key: 1,
  //   onClick: () => onPageChange(1)
  // }];


  return {items}
}

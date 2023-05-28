import React from 'react'

interface UsePaginationProps {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

export default function usePagination({count,onPageChange, page,disabled}: UsePaginationProps) {

    const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({length}).map((_,index) => index + start);
    }
    
    const startPage = 1;
    const endPage = count;

    // => disabled 옵션으로 처리
    // page = page >= endPage ? endPage - 1 : page <= startPage - 1 ? startPage - 1 : page;
    
    const boundaryCount = 2;
    const boundaryStart = startPage + boundaryCount;
    const boundaryEnd = endPage - boundaryCount*2;

    let result: number[] = [];
    if(page <= boundaryCount){
      result = range(boundaryStart,boundaryStart+boundaryCount);
    }else if(page >= endPage - (boundaryCount+1)){ 
      result = range(boundaryEnd,boundaryEnd+boundaryCount);
    }else{
      result = range(page,page+boundaryCount);
    }


    const itemList = [
      'prev',
      startPage,
      (page + 1) -  startPage  <= (boundaryCount+1) ? 2 :  'start-ellipsis',
      ...result,
      endPage - (page + 1) <= (boundaryCount+1) ? endPage -1 : 'end-ellipsis',
      endPage,
      'next',
    ]

    const items = itemList.map((item,index) => (
      typeof item === 'number' ? {
        key:index,
        onClick: () => onPageChange(item - 1),
        item,
        selected: item - 1 === page,
        disabled,
      } : {
        key: index,
        onClick: () => onPageChange(item === 'next' ? page + 1 : page - 1),
        item ,
        selected: false, 
        disabled: disabled || item.indexOf('ellipsis') > -1 || (item === 'next' ? page >= endPage - 1 : page -1 < 0)
      }
    ));


    return {items}
}

// disabled: disabled || item.indexOf('ellipsis') > -1 || (item === 'next' ? page >= count - 1 : page - 1 < 0),
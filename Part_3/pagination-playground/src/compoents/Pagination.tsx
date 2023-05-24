import React,{memo} from 'react'

interface Props {
    count: number;
    page: number;
    onPageChange: (page: number) => void;
    boundaryCount?: number;
}

const Pagination: React.FC<Props> = ({ count, page, onPageChange, boundaryCount = 1 }) => {
    console.log("count",count);
    console.log("page",page);
    

    const range = (start: number, end: number) => {
        const length = end - start + 1;
        return Array.from({ length }).map((_,index) => index + start);
    }

    const startPage = 1;
    const endPage = count;

    const startPages = range(startPage,Math.min(boundaryCount,count));
    console.log("startPages",startPages);
    const endPages = range(1,count);
    console.log("endPages",endPages);

  return (
    <div>Pagination</div>
  )
}

export default memo(Pagination); 
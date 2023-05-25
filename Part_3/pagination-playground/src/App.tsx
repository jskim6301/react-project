import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './compoents/Pagination';
import { AiOutlineConsoleSql } from 'react-icons/ai';


interface IComment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}
interface Response {
  data: Array<IComment>;
  length: number;
}

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [items, setItems] = useState<Array<IComment>>([]);


  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get<Response>('https://jsonplaceholder.typicode.com/comments');
      const total = res.data.length;
      setTotalPages(total);
      setItems(res.data as unknown as Array<IComment>);
    }

    fetch();
  },[]);

  const handlePageChange = useCallback((currentPage: number): void => {
    console.log("currentPage",currentPage);
    setPage(currentPage);
  },[]);
  
  // const handlePageChange = (currentPage: number): void => {
  //     setPage(currentPage); 
  // };



  return (
    <div>
      <ul>
        {
          items.map(item => (
            <li key={item.id}>{item.body}</li>
          ))
        }
      </ul>
      <Pagination count={totalPages} page={page} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;

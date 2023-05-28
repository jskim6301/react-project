import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import useIntersectionObserver from './hooks/useIntersectionObserver';

interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Passengers {
  _id: string;
  name: string;
  trips: number;
  airline: Airline;
  __v: number;
}

interface Props {
  isLastItem: boolean;
  onFetchMorePassengers: () => void;
  children?: any;
}

const Passenger: React.FC<Props> = ({children,isLastItem,onFetchMorePassengers}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref,{});
  const isIntersecting = !!entry?.isIntersecting;

  useEffect(() => {
    isLastItem && isIntersecting && onFetchMorePassengers();
  },[isLastItem,isIntersecting]);

  return(
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        display:'flex',
        border:'1px dashed #000',
      }}
    >
      <div style={{margin: 'auto'}}>{children}</div>
    </div>
  );
}

function App() {

  const [passengers, setPassengers] = useState<Array<Passengers>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const getPassengers = async () => {
    // const page = currentPageRef.current;
    const size = 30;
    try {
      
      const response = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`);
      const passenger = response.data.data;
      console.log("passenger??",passenger);
      // const isLast = response.data.totalPages === page;
      const isLast = response.data.totalPages === page;

      setPassengers(prev => [...prev,...passenger]);
      setIsLast(isLast);

    } catch (e) {
      console.error(e);
    }    
  }

  useEffect(() => {
    !isLast && getPassengers();
  },[page]);

  return (
    <>
      {
        passengers.map((passenger,idx) => (
          <Passenger 
          key={passenger._id}
          isLastItem={passengers.length - 1 === idx}
          onFetchMorePassengers={() => setPage(prev => prev + 1)}
          >
            {passenger.name}
          </Passenger>
        ))
      }
    </>
  );
}

export default App;

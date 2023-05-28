import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { throttle } from 'throttle-debounce';
import './App.css';

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

function App() {
  const listRef = useRef<HTMLUListElement>(null);

  const currentPageRef = useRef<number>(0);

  const [passengers, setPassengers] = useState<Array<Passengers>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);
  

  const getPassengers = async (init?: boolean) => {
    const page = currentPageRef.current;
    const size = 30;
    try {
      const response = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`);
      const passenger = response.data.data;
      console.log("passenger??",passenger);
      // const isLast = response.data.totalPages === page;
      const isLast = response.data.totalPages === currentPageRef.current;
      

      init ? setPassengers(passenger) : setPassengers(prev => [...prev,...passenger]);
      setIsLast(isLast);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if(isScrollBottom) {
      currentPageRef.current += 1;

      !isLast && getPassengers();
    }
  },[isScrollBottom,isLast]);

  useEffect(() => {
    getPassengers(true);
  },[]);

  const handleScroll = throttle(1000,() => {
    if(listRef.current){
      const { scrollHeight, offsetHeight, scrollTop } = listRef.current;

      const offset = 50;

      setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
    }
  });

  return (
    <>
      <ul className='list' onScroll={handleScroll} ref={listRef}>
        {passengers.map((passenger) => (
          <li className='item' key={passenger._id}>
            {passenger.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
/*


{
    "id": 12,
    "name": "Sri Lankan Airways",
    "country": "Sri Lanka",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
    "slogan": "From Sri Lanka",
    "head_quaters": "Katunayake, Sri Lanka",
    "website": "www.srilankaairways.com",
    "established": "1990"
}


{
    "totalPassengers": 6,
    "totalPages": 6,
    "data": [
        {
            "_id": "5eef7f1bdfaf515ddc9feade",
            "name": "Saman Jeewantha",
            "trips": 500,
            "airline": [
                {
                    "id": 4,
                    "name": "Emirates",
                    "country": "Dubai",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/150px-Emirates_logo.svg.png",
                    "slogan": "From Dubai to destinations around the world.",
                    "head_quaters": "Garhoud, Dubai, United Arab Emirates",
                    "website": "www.emirates.com/",
                    "established": "1985"
                }
            ],
            "__v": 0
        }
    ]
}


*/
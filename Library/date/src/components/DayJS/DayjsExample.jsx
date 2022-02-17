import React, { useRef, useState } from 'react'

import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
// dayjs는 가볍지만 tree shaking이 안된다.
// 객체지향
export default function DayjsExample() {
    const birthDayRef = useRef(null);
    const [day,setDay] = useState("");
    const handleBirthDayChange = (event) => {
        setDay(dayjs(event.target.value,"YYYY-MM-DD").format("dddd"));
    }


    const dayjsDate = dayjs();
    const newDayjsDateDate = dayjsDate.add(1,"week");
    const cloneNewDayjsDate = newDayjsDateDate.add(1,"week");
  return (
    <div>
      <h1>Day.js</h1>
      <div>Immutable Check</div>
      <p>기준날짜 2021-07-12</p>
      <div>
          {dayjsDate.format() /*2021-07-12 */}
          <br />
          {newDayjsDateDate.format()/*2021-07-19 */}
          <br />
          {cloneNewDayjsDate.format()/*2021-07-26 */}
          <br />
          <div>Summer Time (New-York)</div>
          <div>{dayjs.tz.guess()}</div>
          <div>
              2018년 3월 10일 13시에 하루 더하기:
              {/* {moment("2018-03-10 13:00:00").add(1,"day").format()} */}
              {dayjs.tz("2018-03-10 13:00:00","America/New-York").add(1,"day").format()}
          </div>
          <br />
          <div>
              2018년 3월 10일 13시에 24시간 더하기:
              {dayjs.tz("2018-03-10 13:00:00","America/New-York").add(24,"hour").format()}
          </div>
          <br />
          <div>Leap year (Korea)</div>
          <div>
              2017년 1월 1일에 1년 빼기:
              {dayjs("2017-01-01").subtract(1,"year").format()}
          </div>  
          <br />  
          <div>
              2017년 1월 1일에 365일 빼기:
              {dayjs("2018-03-10").subtract(365,"day").format()}
          </div>
          <br />    
          <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
          <div>{dayjs("07-17-2021").format("YYYY년 M월 D일")}</div>
          <br />
          <div>자기 생일 요일 찾기</div>
          <div>
              <input type="date" ref={birthDayRef} onChange={handleBirthDayChange}/>
              <div>무슨 요일이었을까?</div>
              <div>{day}</div>
          </div>
          <br />
          <div>두 날짜 비교</div>
          <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이인가?</div>
          <div>{`${dayjs("2021-07-17 03:00").diff(dayjs("2021-07-18 02:00"),"hours")}시간}`}</div>
      </div>
    </div>
  )
}

import React, {useEffect, useMemo, useState} from 'react';
import styled from "@emotion/styled";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import {isSameDay} from "../../utils/date";

const Base = styled.div(
    {
      width: "100%",
      height: "100vh",
      padding: "24px 12px;",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box",
      backgroundColor: "#28272A",
    },
);

const Header = styled.div(
    {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
);

const Title = styled.h1(
    {
      margin: "0",
      padding: "8px 24px",
      fontSize: "24px",
      fontWeight: "normal",
      textAlign: "center",
      color: "#F8F7FA",
    }
)

const ArrowButton = styled.button<{ pos: 'left' | 'right'}>(
    {
      border: "none",
      borderRadius: "4px",
      padding: "8px 12px",
      backgroundColor: "transparent",
      fontSize: "18px",
      cursor: "pointer",
      color: "#F8F7FA",
    }
)

const ButtonContainer = styled.div(
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
)

const Table = styled.table(
    {
      borderCollapse: "collapse",
      width: "100%",
      height: "100%",
      borderSpacing: "0",
    }
)

const TableHeader = styled.thead`
  padding-block: 12px;
  > tr {
    > th {
      padding-block: 12px;
      font-weight: normal;
      color: #F8F7FA;
    }
  }
`;

const TableBody = styled.tbody();
const TableData = styled.td(
    {
      textAlign: "center",
      color: "#C9C8CC",
      padding: "8px",
      position: "relative",
    }
)

const DisplayDate = styled.div<{isToday?: boolean; isSelected?: boolean}>`
  color: ${({ isToday }) => isToday && '#F8F7FA'};
  background-color: ${({ isToday,isSelected }) => isSelected ? '#7047EB' : isToday ? '#313133' : ''};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: flex-end;
  position: absolute;
  top: 8px;
  right: 60px;
  //margin-left: 50px;
  width: 36px;
  height: 36px;
  cursor: pointer;

`;

//요일
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//달
const MONTHS = ["January","February", "March","April","May","June","July","August","September","October","November","December"];

const Calendar: React.FC = () => {

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const {year, month, firstDay,lastDay} = useMemo(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return ({year,month,firstDay,lastDay});
  },[selectedDate]);

  // console.log("Array(firstDay.getDay())>",...Array(firstDay.getDay()).keys()) // 0,1,2,3
  const pad = () => [...Array(firstDay.getDay()).keys()].map((p: number) => <TableData key={`pad_${p}`}/>);

  // console.log("Array(lastDay.getDate())>>",...Array(lastDay.getDate()).keys()); // 0 ~ 29
  const range = () => [...Array(lastDay.getDate()).keys()].map((d: number) => {
    const thisDay = new Date(year , month , d + 1);
    const today = new Date();

    return (
        <TableData key={d} onClick={() => selectDate(thisDay)}>
          <DisplayDate
              isSelected={isSameDay(selectedDate,thisDay)}
              isToday={isSameDay(today,thisDay)}
          >
            {new Date(year,month, d+1).getDate()}
          </DisplayDate>
        </TableData>
    )
  })

  const selectDate = (date: Date) => {
    setSelectedDate(date);
  }

  const render = () => {
    const items = [...pad(),...range()];
    const weeks = Math.ceil(items.length / 7);

    return [...Array(weeks).keys()].map((week: number) => {
      return (
          <tr key={`week_${week}`}>
            {items.slice(week * 7,week * 7 + 7)}
          </tr>
      )
    });
  }

  return (
      <Base>
        <Header>
          <ButtonContainer>
            <ArrowButton pos="left" onClick={() => selectDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}>
              <BiChevronLeft/>
            </ArrowButton>
            <Title>{`${MONTHS[month]}`}</Title>
            <ArrowButton pos="right" onClick={() => selectDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}>
              <BiChevronRight/>
            </ArrowButton>
          </ButtonContainer>
        </Header>
        <Table>
          <TableHeader>
            <tr>
              {
                DAYS.map((day, index) => (
                    <th key={day} align="center">{day}</th>
                ))
              }
            </tr>
          </TableHeader>
          <TableBody>
            {render()}
          </TableBody>
        </Table>
      </Base>
  );
};

export default Calendar;
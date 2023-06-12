import React, {useMemo} from 'react';
import styled from "@emotion/styled/macro";
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {selectedDateState, todoListState} from "../TodoList/atom";
import CalendarDay from "./CalendarDay";
import {isSameDay} from "../../utils/date";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  border-spacing: 0;
`;

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

const TableBody = styled.tbody`
  > tr {
    > td {
      width: 128px;
      height: 128px;
      box-sizing: border-box;
    }
  }
`;

const Base = styled.div`
  min-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 24px;
  height: calc(100vh - 48px);
  box-sizing: border-box;
  background-color: #28272A;
  ${Header} + ${Table} {
    margin-top: 36px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowButton = styled.button<{ pos: 'left' | 'right' }>`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  color: #F8F7FA;
`;

const Title = styled.h1`
  margin: 0;
  padding: 8px 24px;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  color: #F8F7FA;
`;

const TableData = styled.td`
  text-align: center;
  color: #C9C8CC;
  padding: 8px;
  position: relative;
`;

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

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];



const Calendar = () => {
    const selectedDate = useRecoilValue(selectedDateState);
    const todoList = useRecoilValue(todoListState);

    const setSelectedDate = useSetRecoilState(selectedDateState);

    const {year, month, date, firstDay, lastDay} = useMemo(() => {
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth();
        const date = selectedDate.getDate();

        return ({
            year,
            month,
            date,
            firstDay: new Date(year, month, 1),
            lastDay: new Date(year, month+ 1, 0)
        })
    },[selectedDate]);

    const pad = () => [...Array(firstDay.getDay()).keys()].map((p: number) => <TableData key={`pad_${p}`} />);

    const range = () => [...Array(lastDay.getDate()).keys()].map((d: number) => {
        const thisDay = new Date(year, month, d + 1);
        const today = new Date();
       return (
           <TableData key={d} >
               <DisplayDate
                isSelected={isSameDay(selectedDate,thisDay)}
                isToday={isSameDay(today,thisDay)}
               >
                   {new Date(year,month,d + 1).getDate()}
               </DisplayDate>
           </TableData>
       );
    });

    const renderDays = () => {
        const items = [...pad(), ...range()];

        const weeks = Math.ceil(items.length / 7);

        return [...Array(weeks).keys()].map((week: number) => (
            <tr key={`week_${week}`}>
                {items.slice(week * 7, week * 7 + 7)}
            </tr>
        ));
    }

    const selectDate = (date: Date) => {
        setSelectedDate(date);
    }

    return (
        <Base>
            <Header>
                <ButtonContainer>
                    <ArrowButton pos="left" onClick={() => selectDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}>
                        <BiChevronLeft />
                    </ArrowButton>
                    <Title>{`${MONTHS[month]} ${year} `}</Title>
                    <ArrowButton pos="right" onClick={() => selectDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}>
                        <BiChevronRight />
                    </ArrowButton>
                </ButtonContainer>
            </Header>
            <Table>
                <TableHeader>
                    <tr>
                        {
                            DAYS.map((day) => (
                                <th key={day} align="center">{day}</th>
                            ))
                        }
                    </tr>
                </TableHeader>
                <TableBody>
                    {renderDays()}
                </TableBody>
            </Table>
        </Base>
    );
};

export default Calendar;
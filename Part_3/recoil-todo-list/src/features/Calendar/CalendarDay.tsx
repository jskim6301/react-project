import React from 'react';
import styled from "@emotion/styled/macro";
import {isSameDay} from "../../utils/date";
import {selectedDateState} from "../TodoList/atom";
import {useRecoilValue} from "recoil";

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

const Container = styled.div``;

interface Props {
    date: Date;
}

const CalendarDay: React.FC<Props> = ({date}) => {
    const today = new Date();

    const selectedDate = useRecoilValue(selectedDateState);

    return (
        <TableData
            key={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
            align="center"
        >
            <Container>
                <DisplayDate
                    isSelected={isSameDay(selectedDate,date)}
                    isToday={isSameDay(today,date)}
                >
                    {date.getDate()}
                </DisplayDate>
            </Container>
        </TableData>
    );
};

export default CalendarDay;

// import React from 'react';
// import {isSameDay} from "../../utils/date";
// import styled from "@emotion/styled";
// import {useRecoilValue, useSetRecoilState} from "recoil";
// import {filteredTodoListState, selectedDateState} from "../TodoList/atom";
// import {todoFormModalOpenState} from "../TodoFormModal/atom";
// import {todoStatisticsModalOpenState} from "../TodoStatisticsModal/atom";
// import TodoList from "../TodoList";
//
// const TableData = styled.td(
//     {
//         textAlign: "center",
//         color: "#C9C8CC",
//         padding: "8px",
//         position: "relative",
//     }
// )
//
// const DisplayDate = styled.div<{isToday?: boolean; isSelected?: boolean}>`
//   color: ${({ isToday }) => isToday && '#F8F7FA'};
//   background-color: ${({ isToday,isSelected }) => isSelected ? '#7047EB' : isToday ? '#313133' : ''};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   align-self: flex-end;
//   position: absolute;
//   top: 8px;
//   right: 60px;
//   //margin-left: 50px;
//   width: 36px;
//   height: 36px;
//   cursor: pointer;
//
// `;
// const Container = styled.div``;
//
// interface Props {
//     date: Date;
// }
//
// const CalendarDay: React.FC<Props> = ({ date}) => {
//     console.log("date",date);
//     const today = new Date();
//
//     const selectedDate = useRecoilValue(selectedDateState);
//     const todoList = useRecoilValue(filteredTodoListState(date));
//
//     const setSelectedDate = useSetRecoilState(selectedDateState);
//     const setTodoFormModalOpen = useSetRecoilState(todoFormModalOpenState);
//     const setTodoStatisticsModalOpen = useSetRecoilState(todoStatisticsModalOpenState);
//
//     const handleTodoFormModalOpen = (d: number) => {
//         setSelectedDate(new Date(selectedDate.setDate(d)));
//
//         setTodoFormModalOpen(true);
//     }
//
//     const handleDateSelect = (d: number) => {
//         setSelectedDate(new Date(selectedDate.setDate(d)));
//     }
//     const handleTodoStatisticsModalOpen = (e: React.SyntheticEvent<HTMLDivElement>) => {
//         e.stopPropagation();
//         setTodoStatisticsModalOpen(true);
//     }
//
//     return (
//         <div>
//             <TableData onDoubleClick={() => handleTodoFormModalOpen(date.getDate())}>
//                 <Container>
//                     <DisplayDate
//                         isSelected={isSameDay(selectedDate,date)}
//                         isToday={isSameDay(today,date)}
//                         onClick={() => handleDateSelect(date.getDate())}
//                         onDoubleClick={() => handleTodoStatisticsModalOpen}
//                     >
//                         {date.getDate()}
//                     </DisplayDate>
//                     <TodoList items={todoList}/>
//                 </Container>
//             </TableData>
//         </div>
//     );
// };
//
// export default CalendarDay;
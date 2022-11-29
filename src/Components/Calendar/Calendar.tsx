import React from 'react';
import {useCalendar} from "../../hooks/useCalendar";
import styles from './calendar.module.scss';

interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
    firstWeekDay?: number;
}

const Calendar: React.FC<CalendarProps> = ({firstWeekDay = 2, selectDate, selectedDate, locale}) => {

    const {state} = useCalendar({firstWeekDay, selectedDate})
    console.log(state)
    let number ;
    return (

        <div className={styles.root}>
            <h1>{state.selectedDate.dayNumber}. {state.selectedDate.monthNumber}. {state.selectedDate.year}</h1>
            <h1>{state.selectedDate.month}</h1>
            <div className={styles.dayShort}>
                {state.weekDaysNames.map((item, index) => (<h4 key={index}>{item.dayShort}
                    {state.calendarDays.filter((value,ind)=>{
                        if( value.day===item.day){
                            (<h4>{value.dayNumber}</h4>)
                        }

                    })}
                </h4>))}
            </div>
        </div>
    );
};
export default Calendar;

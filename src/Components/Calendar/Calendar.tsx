import React from 'react';
import {useCalendar} from "../../hooks/useCalendar";
import styles from './calendar.module.scss';
import Table from "../Table/Table";

interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
    firstWeekDay?: number;
}

const Calendar: React.FC<CalendarProps> = ({firstWeekDay = 2, selectDate, selectedDate, locale}) => {

    const {state} = useCalendar({firstWeekDay, selectedDate})
    console.log(state)
    return (

        <div className={styles.root}>
            <div>{state.selectedDate.dayNumber}. {state.selectedDate.monthNumber}. {state.selectedDate.year}</div>
            <div>{state.selectedDate.month}</div>
            <Table/>
        </div>
    );
};
export default Calendar;

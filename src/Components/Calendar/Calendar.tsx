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
    return (
        <div className={styles.root}>
            Calendar
        </div>
    );
};
export default Calendar;

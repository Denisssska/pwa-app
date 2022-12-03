import React from 'react';
import {useCalendar} from "../../hooks/useCalendar";
import styles from './calendar.module.scss';
import Table from "../Table/Table";
import {formatDate} from "../../utils/formatDate";
import left from '../../assets/l.png';
import right from '../../assets/r.png';

interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
    firstWeekDay?: number;
}

const Calendar: React.FC<CalendarProps> = ({firstWeekDay = 2, selectDate, selectedDate, locale}) => {

    const {state, functions} = useCalendar({firstWeekDay, selectedDate})
    console.log(state)
    return (
        <div className={styles.root}>
            <div className={styles.headerDate}>{formatDate(selectedDate, "DD MM YYYY")}</div>
            <div className={styles.selectedDay}>
                <img aria-hidden className={styles.image} src={left} alt="left"/>
                {state.mode === 'days' && (
                    <div aria-hidden onClick={() => functions.setMode('months')}>
                        {state.monthsNames[state.selectedMonth.monthIndex].month}
                    </div>
                )}
                {state.mode === 'months' && (
                    <div aria-hidden onClick={() => functions.setMode('years')}>
                        {state.monthsNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
                    </div>
                )}
                {state.mode === 'years' && (
                    <div aria-hidden  onClick={() => functions.setMode('days')}>
                        {state.selectedYearInterval[0]} -{" "}
                        {state.selectedYearInterval[state.selectedYearInterval.length]}
                    </div>
                )}
                <img aria-hidden className={styles.image} src={right} alt="right"/>
            </div>
            <Table/>
        </div>
    );
};
export default Calendar;

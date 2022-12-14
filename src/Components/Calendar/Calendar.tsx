import React from 'react';
import {useCalendar} from "../../hooks/useCalendar";
import styles from './calendar.module.scss';
import {formatDate} from "../../utils/formatDate";
import left from '../../assets/l.png';
import right from '../../assets/r.png';
import './OneMonth/oneMonth.scss';
import './AllMonths/allMonths.scss';
import OneMonth from "./OneMonth/OneMonth";
import AllMonths from "./AllMonths/AllMonths";
import AllYears from "./AllYears/AllYears";

export interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
    firstWeekDay?: number;
}

const Calendar: React.FC<CalendarProps> = ({firstWeekDay = 2, selectDate, selectedDate, locale}) => {

    const {state, functions} = useCalendar({firstWeekDay, selectedDate, locale})
    return (
        <div className={styles.root}>
            <div className={styles.headerDate}>{formatDate(selectedDate, "DD MM YYYY")}</div>
            <div className={styles.selectedDay}>
                <img onClick={() => functions.onClickArrow('left')} aria-hidden className={styles.image} src={left}
                     alt="left"/>
                {state.mode === 'days' && (
                    <div aria-hidden onClick={() => functions.setMode('months')}>
                        {state.monthsNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
                    </div>
                )}
                {state.mode === 'months' && (
                    <div aria-hidden onClick={() => functions.setMode('years')}>
                        {state.selectedYear}
                    </div>
                )}
                {state.mode === 'years' && (
                    <div aria-hidden onClick={() => functions.setMode('days')}>
                        {state.selectedYearInterval[0]} - {" "}
                        {state.selectedYearInterval[state.selectedYearInterval.length - 1]}
                    </div>
                )}
                <img onClick={() => functions.onClickArrow('right')} aria-hidden className={styles.image} src={right}
                     alt="right"/>
            </div>
            {state.mode === 'days' && (
                <OneMonth selectDate={selectDate} calendarDays={state.calendarDays}
                          monthIndex={state.selectedMonth.monthIndex} selectedDate={state.selectedDate}
                          setSelectedDate={functions.setSelectedDate} weekDaysNames={state.weekDaysNames}/>
            )}
            {state.mode === 'months' && (
                <AllMonths monthsNames={state.monthsNames} selectedYear={state.selectedYear}
                           monthIndex={state.selectedMonth.monthIndex}
                           setSelectedMonthByIndex={functions.setSelectedMonthByIndex} setMode={functions.setMode}/>
            )}
            {state.mode === 'years' && (
                <AllYears selectedYearInterval={state.selectedYearInterval} selectedYear={state.selectedYear}
                          setMode={functions.setMode} setSelectedYear={functions.setSelectedYear}/>

            )}

        </div>
    );
};
export default Calendar;

import React from 'react';
import {useCalendar} from "../../hooks/useCalendar";
import styles from './calendar.module.scss';
import {formatDate} from "../../utils/formatDate";
import left from '../../assets/l.png';
import right from '../../assets/r.png';
import {checkIsToday} from "../../utils/checkIsToday";
import {checkDateIsEqual} from "../../utils/checkDateIsEqual";
import './calendar.scss';

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
                    <div aria-hidden onClick={() => functions.setMode('days')}>
                        {state.selectedYearInterval[0]} - {" "}
                        {state.selectedYearInterval[state.selectedYearInterval.length - 1]}
                    </div>
                )}
                <img aria-hidden className={styles.image} src={right} alt="right"/>
            </div>
            <div className={styles.calendar__week__names}>
                {state.weekDaysNames.map((weekDaysName) => (
                    <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
                ))}
            </div>
            <div className={styles.calendar__days}>{state.calendarDays.map(day => {
                // console.log("@")
                const isToday = checkIsToday(day.date);
                const isSelectedDay = checkDateIsEqual(day.date, state.selectedDate.date);
                const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex;
                return <div aria-hidden
                    onClick={()=>{
                        functions.setSelectedDate(day)
                        selectDate(day.date)
                    }}
                    className={[
                        'calendar__day',
                        isToday ? 'calendar__today' : '',
                        isSelectedDay ? 'calendar__selected__day' : '',
                        isAdditionalDay ? 'calendar__additional__day' : ''].join(' ')}
                    key={`${day.dayNumber}-${day.monthIndex}`}>{day.dayNumber}</div>
            })}</div>
        </div>
    );
};
export default Calendar;

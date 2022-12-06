import React from 'react';
import styles from "../calendar.module.scss";
import {checkIsToday} from "../../../utils/checkIsToday";
import {checkDateIsEqual} from "../../../utils/checkDateIsEqual";
import './oneMonth.scss';

type SelectedDayType = {
    date: Date;
    day: string;
    dayNumber: number;
    dayNumberInWeek: number;
    dayShort: string;
    month: string;
    monthIndex: number;
    monthNumber: number;
    monthShort: string;
    timeStamp: number;
    week: number;
    year: number;
    yearShort: string;
}

interface OneMonthProps {
    selectDate: (date: Date) => void;
    setSelectedDate: (day: any) => void
    calendarDays: Array<SelectedDayType>;
    selectedDate: SelectedDayType
    weekDaysNames: Array<{ day: string, dayShort: string }>;
    monthIndex: number;
}

const OneMonth: React.FC<OneMonthProps> = ({
                                               setSelectedDate,
                                               monthIndex,
                                               selectedDate,
                                               selectDate,
                                               weekDaysNames,
                                               calendarDays
                                           }) => {
    return (
        <div>
            <div className={styles.calendar__week__names}>
                {weekDaysNames.map((weekDaysName) => (
                    <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
                ))}
            </div>
            <div className={styles.calendar__days}>
                {calendarDays.map(day => {
                    const isToday = checkIsToday(day.date);
                    const isSelectedDay = checkDateIsEqual(day.date, selectedDate.date);
                    const isAdditionalDay = day.monthIndex !== monthIndex;
                    return <div aria-hidden
                                onClick={() => {
                                    setSelectedDate(day)
                                    selectDate(day.date)
                                }}
                                className={[
                                    'calendar__day',
                                    isToday ? 'calendar__today' : '',
                                    isSelectedDay ? 'calendar__selected__day' : '',
                                    isAdditionalDay ? 'calendar__additional__day' : ''].join(' ')}
                                key={`${day.dayNumber}-${day.monthIndex}`}>
                        {day.dayNumber}
                    </div>
                })}
            </div>
        </div>
    );
};

export default OneMonth;
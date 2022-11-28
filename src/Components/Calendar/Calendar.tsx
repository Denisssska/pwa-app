import React from 'react';
import {useCalendar} from "../../hooks/useCalendar";

interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
    firstWeekDay?: number;
}

const Calendar: React.FC<CalendarProps> = ({firstWeekDay = 2, selectDate, selectedDate, locale}) => {

    const {} = useCalendar({firstWeekDay, selectedDate})
    return (
        <div>
            Calendar
        </div>
    );
};
export default Calendar;

import React from 'react';
import {useCalendar} from "../../hooks/useCalendar";

interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({selectDate, selectedDate, locale}) => {
    const {} = useCalendar({selectedDate})
    return (
        <div>
            Calendar
        </div>
    );
};
export default Calendar;

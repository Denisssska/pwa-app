import {useMemo, useState} from "react";
import {createDate} from "../utils/createDate";
import {createMonth} from "../utils/createMonth";
import {getMonthNames} from "../utils/getMonthNames";

interface UseCalendarProps {
    locale?: string;
    selectedDate: Date;
}

export const useCalendar = ({locale = 'default', selectedDate: date}: UseCalendarProps) => {
    const [mode, setMode] = useState<"days" | "months" | "years">('days');
    const [selectedDate, setSelectedDate] = useState(createDate({date}));
    const [selectedMonth, setSelectedMonth] = useState(createMonth({
        date: new Date(selectedDate.year, selectedDate.monthIndex),
        locale
    }));
    const [selectedYear, setSelectedYear] = useState(selectedDate.year)
    const monthsNames = useMemo(() => getMonthNames(locale), [])
    return {};
}
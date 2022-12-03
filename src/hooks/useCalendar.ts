import {useMemo, useState} from "react";
import {createDate} from "../utils/createDate";
import {createMonth} from "../utils/createMonth";
import {getMonthNames} from "../utils/getMonthNames";
import {getWeekDaysNames} from "../utils/getWeekDaysNames";
import {getMonthNumberOfDays} from "../utils/getMonthNumberOfDays";

interface UseCalendarProps {
    locale?: string;
    selectedDate: Date;
    firstWeekDay?: number
}

const getYearsInterval = (year: number) => {
    const startYear = Math.floor(year / 10) * 10;
    return [...Array(10)].map((_, index) => startYear + index)
}
export const useCalendar = ({locale = 'default', selectedDate: date, firstWeekDay =2}: UseCalendarProps) => {

    const [mode, setMode] = useState<"days" | "months" | "years">('days');
    const [selectedDate, setSelectedDate] = useState(createDate({date}));
    const [selectedMonth, setSelectedMonth] = useState(createMonth({
        date: new Date(selectedDate.year, selectedDate.monthIndex),
        locale
    }));
    const [selectedYear, setSelectedYear] = useState(selectedDate.year)
    const [selectedYearInterval, setSelectedYearInterval] = useState(getYearsInterval(selectedDate.year))
    const monthsNames = useMemo(() => getMonthNames(locale), [])
    const weekDaysNames = useMemo(() => getWeekDaysNames(firstWeekDay, locale), [])
    const days = useMemo(() => selectedMonth.createMonthDays(), [selectedMonth, selectedYear])
    const calendarDays = useMemo(() => {
        const monthNumberOfDays = getMonthNumberOfDays(selectedDate.monthIndex, selectedYear)
        const prevMonthDays = createMonth({
            date: new Date(selectedYear, selectedMonth.monthIndex - 1),
            locale
        }).createMonthDays();
        const nextMonthDays = createMonth({
            date: new Date(selectedYear, selectedMonth.monthIndex + 1),
            locale
        }).createMonthDays();
        const firstDay = days[0];
        const lastDay = days[monthNumberOfDays - 1];
        const shiftIndex = firstWeekDay - 1;
        console.log(shiftIndex)
        const numberOfPrevDays = firstDay.dayNumberInWeek - 1 - shiftIndex < 0 ?
            7 - (firstWeekDay - firstDay.dayNumberInWeek) : firstDay.dayNumberInWeek - 1 - shiftIndex;
        const numberOfNextDays =
            7 - lastDay.dayNumberInWeek + shiftIndex > 6 ?
            7 - lastDay.dayNumberInWeek - (7 - shiftIndex) :
            7 - lastDay.dayNumberInWeek + shiftIndex;
        const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;
        const result = [];
        for (let i = 0; i < numberOfPrevDays; i += 1) {
            const inverted = numberOfPrevDays - i;
            result[i] = prevMonthDays[prevMonthDays.length - inverted]
        }
        for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i += 1) {
            result[i] = days[i - numberOfPrevDays]
        }
        for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i += 1) {
            result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays]
        }
        //console.log(numberOfNextDays)
        return result
    }, [selectedMonth.year, selectedMonth.monthIndex, selectedYear]);

    return {
        state: {
            mode,
            calendarDays,
            weekDaysNames,
            monthsNames,
            selectedMonth,
            selectedDate,
            selectedYear,
            selectedYearInterval
        },functions:{setMode}
    };
}
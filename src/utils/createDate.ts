import {getWeekNumber} from "./getWeekNumber";

export interface CreateParams {
    locale?: string;
    date?: Date;
}

export const createDate = (params?: CreateParams) => {
    const locale = params?.locale ?? 'default';
    const d = params?.date ?? new Date();
    const dayNumber = d.getDate();
    const day = d.toLocaleDateString(locale, {weekday: 'long'});
    const dayShort = d.toLocaleDateString(locale, {weekday: 'short'});
    const dayNumberInWeek = d.getDay() + 1;
    const year = d.getFullYear();
    const yearShort = d.toLocaleDateString(locale, {year: '2-digit'});
    const month = d.toLocaleDateString(locale, {month: 'long'});
    const monthShort = d.toLocaleDateString(locale, {month: 'short'});
    const monthNumber = d.getMonth() + 1;
    const monthIndex = d.getMonth();
    const timeStamp = d.getTime();
    const week = getWeekNumber(d)
    return {
        date:d,
        dayNumber,
        day,
        dayShort,
        dayNumberInWeek,
        year,
        yearShort,
        month,
        monthShort,
        monthNumber,
        monthIndex,
        timeStamp,
        week
    }
}
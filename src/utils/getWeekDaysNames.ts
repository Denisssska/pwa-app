import {createDate} from "./createDate";

export const getWeekDaysNames = (firstWeekDay: number = 2, locale: string = 'default') => {
    const weekDaysNames: {
        day: ReturnType<typeof createDate>['day']
        dayShort: ReturnType<typeof createDate>['dayShort']
    }[] = Array.from({length: 7})
    const date = new Date();
    weekDaysNames.forEach((_, i) => {
        const {day, dayShort, dayNumberInWeek} = createDate({
            locale,
            date: new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
        });
        weekDaysNames[dayNumberInWeek - 1] = {day, dayShort}
    })
    //console.log(weekDaysNames)
    return [...weekDaysNames.slice(firstWeekDay - 1), ...weekDaysNames.slice(0, firstWeekDay - 1)];
}
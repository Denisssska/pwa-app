import React from 'react';
import styles from "../calendar.module.scss";
import './allMonths.scss';

type MonthNameType = {
    date: Date
    month: string
    monthIndex: number
    monthShort: string

}

interface AllMonthsProps {
    monthsNames: Array<MonthNameType>;
    selectedYear: number;
    monthIndex: number;
    setSelectedMonthByIndex: (monthIndex: number) => void;
    setMode: (item: "days" | "months" | "years") => void
}

const AllMonths: React.FC<AllMonthsProps> = ({
                                                 monthIndex,
                                                 monthsNames,
                                                 selectedYear,
                                                 setSelectedMonthByIndex,
                                                 setMode
                                             }) => {
    return (
        <div className={styles.calendar__allMonths_container}>
            {monthsNames.map((monthsName,index) => {
                const isCurrentMonth = new Date().getMonth() === monthsName.monthIndex &&
                    new Date().getFullYear() === selectedYear;
                const isSelectedMonth = monthsName.monthIndex === monthIndex;
                return (
                    <div key={index}
                        onClick={() => {
                            setSelectedMonthByIndex(monthsName.monthIndex)
                            setMode('days')
                        }}
                        className={[
                            'calendar__allMonths',
                            isCurrentMonth ? 'calendar__currentMonth' : '',
                            isSelectedMonth ? 'calendar__selectedMonth' : ''
                        ].join(' ')}>{monthsName.monthShort}</div>
                )
            })}
        </div>
    );
};

export default AllMonths;
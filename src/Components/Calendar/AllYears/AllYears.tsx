import React from 'react';
import styles from "../calendar.module.scss";
import '../AllMonths/allMonths.scss'

interface AllYearsProps {
    selectedYearInterval: Array<number>;
    selectedYear: number;
    setMode: (item: "days" | "months" | "years") => void;
    setSelectedYear: (year: number) => void
}

const AllYears: React.FC<AllYearsProps> = ({selectedYearInterval, selectedYear, setMode, setSelectedYear}) => {
    return (
        <div className={styles.calendar__allMonths_container}>
            <div className='calendar__unchoosable__year'>{selectedYearInterval[0] - 1}</div>
            {selectedYearInterval.map((year, index) => {
                const isSelectedYear = year === selectedYear;
                const isCurrentYear = year === new Date().getFullYear();
                return (
                    <div key={index}
                         onClick={() => {
                             setSelectedYear(year)
                             setMode('months')
                         }}
                         className={[
                             'calendar__allMonths',
                             isCurrentYear ? 'calendar__currentMonth' : '',
                             isSelectedYear ? 'calendar__selectedMonth' : ''
                         ].join(' ')}>{year}</div>
                )
            })}
            <div
                className='calendar__unchoosable__year'>
                {selectedYearInterval[selectedYearInterval.length - 1] + 1}
            </div>
        </div>
    );
};

export default AllYears;
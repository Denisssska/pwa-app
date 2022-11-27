import React, {lazy, Suspense, useState} from 'react';

import {NavLink, Route, Routes} from "react-router-dom";

//lazy -Это синтаксис для ленивой загрузки компонентов в React. Вы заметите, что он внутренне использует dynamic import() syntax, который webpack использует как «точку разделения».
//Компонент <Suspense> отобразит <div> Loading ... </div>, ожидая динамической загрузки кода маршрута. Итак, наш последний компонент App.tsx в итоге выглядит так:
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));
const Calendar = lazy(() => import('./Components/Calendar/Calendar'));

function App() {
    const [selectedDate,selectDate]=useState(new Date())
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/calendar">Calendar</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/calendar" element={<Calendar selectDate={selectDate} selectedDate={selectedDate}/>}/>
                </Routes>
            </Suspense>
        </>
    );
}

export default App;

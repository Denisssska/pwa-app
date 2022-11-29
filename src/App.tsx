import React, {lazy, Suspense, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import NavigatePanelFirst from "./Components/Navigate/NavigateFirst";
import NavigatePanelSecond from "./Components/Navigate/NavigateSecond";
//lazy -Это синтаксис для ленивой загрузки компонентов в React. Вы заметите, что он внутренне использует dynamic import() syntax, который webpack использует как «точку разделения».
//Компонент <Suspense> отобразит <div> Loading ... </div>, ожидая динамической загрузки кода маршрута. Итак, наш последний компонент App.tsx в итоге выглядит так:
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));
const Calendar = lazy(() => import('./Components/Calendar/Calendar'));

function App() {
    const [selectedDate,selectDate]=useState(new Date())
    return (
        <div style={{display:'flex',height:'100vh'}}>
            <Suspense fallback={<div>Loading...</div>}>
               <NavigatePanelFirst/>
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/calendar" element={<Calendar selectDate={selectDate} selectedDate={selectedDate}/>}/>
                </Routes>
                <NavigatePanelSecond/>
            </Suspense>
        </div>
    );
}
export default App;

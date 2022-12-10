import React, {lazy, Suspense, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import NavigatePanelFirst from "./Components/Navigate/NavigateFirst";
import NavigatePanelSecond from "./Components/Navigate/NavigateSecond";
//lazy -Это синтаксис для ленивой загрузки компонентов в React. Вы заметите, что он внутренне использует dynamic import() syntax, который webpack использует как «точку разделения».
//Компонент <Suspense> отобразит <div> Loading ... </div>, ожидая динамической загрузки кода маршрута. Итак, наш последний компонент App.tsx в итоге выглядит так:
const Chat = lazy(() => import('./Components/Chat/Chat'));
const Home = lazy(() => import('./Components/Home/Home'));
const Calendar = lazy(() => import('./Components/Calendar/Calendar'));

function App() {
    const [selectedDate, selectDate] = useState(new Date())
    return (
        <div style={{display: 'flex', height: '100vh', justifyContent: 'space-between'}}>
            <Suspense fallback={<div style={{margin: '30% auto'}}>Loading...</div>}>
                <NavigatePanelFirst/>
                <Routes>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/calendar"
                           element={<Calendar locale={'en-US'} selectDate={selectDate} selectedDate={selectedDate}/>}/>
                </Routes>
                <NavigatePanelSecond/>
            </Suspense>
        </div>
    );
}

export default App;

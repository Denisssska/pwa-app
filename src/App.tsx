import React, {lazy, Suspense} from 'react';

import {NavLink, Route, Routes} from "react-router-dom";
//lazy -Это синтаксис для ленивой загрузки компонентов в React. Вы заметите, что он внутренне использует dynamic import() syntax, который webpack использует как «точку разделения».
//Компонент <Suspense> отобразит <div> Loading ... </div>, ожидая динамической загрузки кода маршрута. Итак, наш последний компонент App.tsx в итоге выглядит так:
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

interface RoutesProps {
    children?: React.ReactNode;
    location?: Partial<Location> | string;
}

function App() {
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
                    </ul>
                </nav>
                <Routes>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}

export default App;

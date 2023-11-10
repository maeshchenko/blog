import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

import './styles/index.scss';
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {},[theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О сайте</Link>
                <button onClick={toggleTheme}>Toggle theme</button>
                <Routes>
                    <Route path='about' element={<AboutPageAsync/>}/>
                    <Route path='/' element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

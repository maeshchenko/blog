import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";



export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {},[theme])}>
            <Suspense fallback={<div>Loading...</div>}>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О сайте</Link>
                <button onClick={toggleTheme}>Toggle theme</button>
                <Routes>
                    <Route path='about' element={<AboutPage/>}/>
                    <Route path='/' element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

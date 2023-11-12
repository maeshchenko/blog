import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export interface INavBarProps {
   className?: string;
}

export const NavBar = ({className}: INavBarProps) => {
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <ThemeSwitcher className={cls.NavBar__themeSwitcher}/>
            <ul className={cls.NavBar__links}>
                <AppLink to={'/'} className={cls.NavBar__link}>Главная</AppLink>
                <AppLink to={'/about'} className={cls.NavBar__link}>О сайте</AppLink>
            </ul>
        </div>
    )
}

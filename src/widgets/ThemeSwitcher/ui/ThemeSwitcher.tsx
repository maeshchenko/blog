import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {useTheme} from "app/providers/ThemeProvider";
import ContrastIcon from 'shared/assets/contrast-symbol.svg';
import {Button, EButtonTheme} from "shared/ui/Button/ui/Button";

export interface IThemeSwitcherProps {
   className?: string;
}

export const ThemeSwitcher = ({className}: IThemeSwitcherProps) => {
    const { toggleTheme} = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={EButtonTheme.CLEAR}
        >
            <ContrastIcon className={cls.ThemeSwitcher__icon}/>
        </Button>
    )
}

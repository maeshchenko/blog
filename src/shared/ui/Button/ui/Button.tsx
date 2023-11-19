import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { type ButtonHTMLAttributes, type FC } from 'react';

export enum EButtonTheme {
  CLEAR = 'clear'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: EButtonTheme
}

export const Button: FC<IButtonProps> = (props: IButtonProps) => {
    const { className, children, theme, ...attrs } = props;
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[`Button--${theme}`]])}
            {...attrs}
        >
            {children}
        </button>
    );
};

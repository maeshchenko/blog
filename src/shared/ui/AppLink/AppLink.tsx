import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, type LinkProps } from "react-router-dom";
import { type FC } from "react";

export enum EAppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

export interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: EAppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props: IAppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = EAppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [
                className,
                cls[`AppLink--${theme}`],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

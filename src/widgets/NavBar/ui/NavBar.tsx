import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NavBar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";
import { type FC, type JSX } from "react";

export interface INavBarProps {
    className?: string;
}

export const NavBar: FC<INavBarProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.NavBar__switchers}>
                <ThemeSwitcher className={cls.NavBar__themeSwitcher} />
                <LangSwitcher className={cls.NavBar__langSwitcher} />
            </div>
            <ul className={cls.NavBar__links}>
                <AppLink to={"/"} className={cls.NavBar__link}>
                    {t("main")}
                </AppLink>
                <AppLink to={"/about"} className={cls.NavBar__link}>
                    {t("about")}
                </AppLink>
            </ul>
        </div>
    );
};

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";
import { useTranslation } from "react-i18next";
import { type FC, type JSX } from "react";

export interface IMainPageProps {
    className?: string;
}

const MainPage: FC<IMainPageProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation("main");
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {t("main_page_title")}
        </div>
    );
};

export default MainPage;

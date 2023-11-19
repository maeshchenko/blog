import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AboutPage.module.scss";
import { useTranslation } from "react-i18next";
import { type FC } from "react";

export interface IAboutPageProps {
    className?: string;
}

const AboutPage: FC<IAboutPageProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation("about");
    return (
        <div className={classNames(cls.AboutPage, {}, [className])}>
            {t("about_page_title")}
        </div>
    );
};

export default AboutPage;

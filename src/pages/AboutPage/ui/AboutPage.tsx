import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { type FC } from "react";

export interface IAboutPageProps {
    className?: string;
}

const AboutPage: FC<IAboutPageProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation("about");
    return (
        <div className={classNames('', {}, [className])}>
            {t("about_page_title")}
        </div>
    );
};

export default AboutPage;

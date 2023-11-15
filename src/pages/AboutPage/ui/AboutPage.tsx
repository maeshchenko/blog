import {classNames} from "shared/lib/classNames/classNames";
import cls from './AboutPage.module.scss';
import {useTranslation} from "react-i18next";

export interface IAboutPageProps {
   className?: string;
}

const AboutPage = ({className}: IAboutPageProps) => {

    const { t, i18n } = useTranslation('about');
    return (
        <div className={classNames(cls.AboutPage, {}, [className])}>
            {t('about_page_title')}
        </div>
    )
}

export default AboutPage

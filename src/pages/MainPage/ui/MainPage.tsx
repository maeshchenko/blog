import {classNames} from "shared/lib/classNames/classNames";
import cls from './MainPage.module.scss';
import {useTranslation} from "react-i18next";

export interface IMainPageProps {
   className?: string;
}

const MainPage = ({className}: IMainPageProps) => {
    const { t, i18n } = useTranslation('main');
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {t('main_page_title')}
        </div>
    )
}

export default MainPage;

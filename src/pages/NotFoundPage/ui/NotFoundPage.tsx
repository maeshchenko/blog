import {classNames} from "shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss';
import {useTranslation} from "react-i18next";

export interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({className}: INotFoundPageProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <h1>{t('page_not_found')}</h1>
        </div>
    );
};

import {classNames} from "shared/lib/classNames/classNames";
import cls from './Loader.module.scss';

export interface ILoaderProps {
    className?: string;
}

export const Loader = ({className}: ILoaderProps) => {
    return (
        <div className={classNames(cls.Loader, {}, [className])}>
        </div>
    );
};

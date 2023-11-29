import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoadingWrapper.module.scss';
import {Loader} from "shared/ui/Loader";

export interface ILoadingWrapperProps {
    className?: string;
}

export const LoadingWrapper = ({className}: ILoadingWrapperProps) => {
    return (
        <div className={classNames(cls.LoadingWrapper, {}, [className])}>
            <Loader/>
        </div>
    );
};

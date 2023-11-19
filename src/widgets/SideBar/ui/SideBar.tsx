import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBar.module.scss';
import { useState } from 'react';
import { Button } from 'shared/ui/Button';

export interface ISideBarProps {
  className?: string
}

export const SideBar = ({ className }: ISideBarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const onToggle = () => { setIsCollapsed(prev => !prev); };

    return (
        <div className={classNames(cls.SideBar, { [cls['SideBar--collapsed']]: isCollapsed }, [className])}>
            <Button onClick={onToggle}>Toggle sidebar</Button>
        </div>
    );
};

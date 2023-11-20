import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { type FC, type JSX, useState } from "react";
import { Button } from "shared/ui/Button";
import {useTranslation} from "react-i18next";

export interface ISideBarProps {
    className?: string;
}

export const SideBar: FC<ISideBarProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const onToggle = (): void => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                cls.SideBar,
                { [cls["SideBar--collapsed"]]: isCollapsed },
                [className],
            )}
        >
            <Button onClick={onToggle}>
                {t("toggle-sidebar")}
            </Button>
        </div>
    );
};

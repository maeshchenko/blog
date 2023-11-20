import { useTranslation } from "react-i18next";
import { Button, EButtonTheme } from "shared/ui/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { type FC, type JSX } from "react";

export interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({
    className,
}): JSX.Element => {
    const { t, i18n } = useTranslation();
    const toggle = (): void => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            theme={EButtonTheme.CLEAR}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {t("lang")}
        </Button>
    );
};

import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';

export interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
        <Button
            theme={EButtonTheme.CLEAR}
            onClick={toggle}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t('lang')}
        </Button>
  );
};

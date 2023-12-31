import {useContext} from "react";
import {ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext,} from "app/providers/ThemeProvider/lib/ThemeContext";

interface IUseThemeResult {
    theme: ETheme;
    toggleTheme: () => void;
}

export function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        const newTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;

        if(setTheme){
            setTheme(newTheme || ETheme.LIGHT);
        }

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme ?? ETheme.LIGHT,
        toggleTheme
    };
}

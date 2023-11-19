import {
    ETheme,
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
} from "../lib/ThemeContext";
import { type FC, type ReactNode, useMemo, useState } from "react";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) ?? ETheme.LIGHT;

interface IProps {
    children: ReactNode;
}

export const ThemeProvider: FC<IProps> = ({ children }) => {
    const [theme, setTheme] = useState<ETheme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

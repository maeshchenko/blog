import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { type FC, Suspense } from "react";

export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="main-content">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

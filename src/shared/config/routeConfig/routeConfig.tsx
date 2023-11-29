import { type RouteProps } from "react-router-dom";
import MainPage from "pages/MainPage/ui/MainPage";
import { AboutPage } from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";

export enum EAppRouter {
    MAIN = "main",
    ABOUT = "about",
    NOT_FOUND = "not_found"
}

export const RoutePath: Record<EAppRouter, string> = {
    [EAppRouter.MAIN]: "/",
    [EAppRouter.ABOUT]: "/about",
    [EAppRouter.NOT_FOUND]: "*"
};

export const routeConfig: Record<EAppRouter, RouteProps> = {
    [EAppRouter.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [EAppRouter.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [EAppRouter.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
};

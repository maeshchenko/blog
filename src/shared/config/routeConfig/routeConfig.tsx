import {RouteProps} from "react-router-dom";
import MainPage from "pages/MainPage/ui/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum EAppRouter {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<EAppRouter, any> = {
    [EAppRouter.MAIN]:'/',
    [EAppRouter.ABOUT]:'/about'
}

export const routeConfig: Record<EAppRouter, RouteProps> = {
    [EAppRouter.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [EAppRouter.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    }
}

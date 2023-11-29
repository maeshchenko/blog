import { Route, Routes } from "react-router-dom";
import { type FC, Suspense } from "react";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import {LoadingWrapper} from "widgets/LoadingWrapper";

export const AppRouter: FC = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <div className={"page-wrapper"}>
                            <LoadingWrapper/>
                        </div>
                        // <Suspense fallback={<LoadingWrapper/>}>
                        //     <div className="page-wrapper">{element}</div>
                        // </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

import { lazy } from "react";

const routers = [
    {
        path: '/',
        component: lazy(() => import("@pages/LatestReleases/LatestReleases")),
    }
];

export default routers;
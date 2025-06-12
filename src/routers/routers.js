import { lazy } from "react";

const routers = [
    {
        path: '/',
        component: lazy(() => import("@pages/Home/Home")),
    }
];

export default routers;
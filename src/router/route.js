import login from "@/views/login";
import HomePage from "@/views/index";

export const route=[
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/login",
        name: "Login",
        component: login,
    },
]
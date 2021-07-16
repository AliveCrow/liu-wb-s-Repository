import HomePage from "@/views/index";
import Login from "@/views/login/index";
import Archive from "@/views/archive/index";
import TagCloud from "@/views/tag-cloud/index";
import Snippet from "@/views/snippet/index";
import About from "@/views/about/index";

export const route=[
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/archive",
        name: "Archive",
        component: Archive,
    },
    {
        path: "/tag-cloud",
        name: "TagCloud",
        component: TagCloud,
    },
    {
        path: "/snippet",
        name: "Snippet",
        component: Snippet,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
]
import HomePage from "@/views/index";
import Login from "@/views/login/index";
import Archive from "@/views/archive/index";
import TagCloud from "@/views/tag-cloud/index";
import Snippet from "@/views/snippet/index";
import About from "@/views/about/index";
import NotFound from "@/views/not-found";

export const route = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: {
      isAsideAlive: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      isAsideAlive: true,
    },
  },
  {
    path: "/archive",
    name: "Archive",
    component: Archive,
    meta: {
      isAsideAlive: true,
    },
  },
  {
    path: "/tag-cloud",
    name: "TagCloud",
    component: TagCloud,
    meta: {
      isAsideAlive: true,
    },
  },
  {
    path: "/snippet",
    name: "Snippet",
    component: Snippet,
    meta: {
      isAsideAlive: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      isAsideAlive: true,
    },
  },
  {
    path: "*",
    name: "Not Found",
    component: NotFound,
    meta: {
      isRouterAlive: true,
    },
  },
];

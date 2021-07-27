import Detail from "@/views/article/detail";

export const ArticleRoute = [
  {
    path: "/article/:id",
    name: "articleDetail",
    component: Detail,
    meta: {
      isAsideAlive: true,
    },
  },
];

import Mock from "mockjs";
import Article from "@/libs/Mock/Article";
import Tag from "@/libs/Mock/Tag";
import Sort from "@/libs/Mock/Sort";

Mock.setup({
  timeout: "0-500",
});

Mock.mock("/articles", Article);
Mock.mock("/tags", Tag);
Mock.mock("/sorts", Sort);

import Mock from "mockjs";
import Article from "@/libs/Mock/Article";
import Tag from "@/libs/Mock/Tag";
import Sort from "@/libs/Mock/Sort";
import Timeline from "@/libs/Mock/Timeline";
import Comment from "@/libs/Mock/Comment";

Mock.setup({
  timeout: "0-500",
});

Mock.mock("/articles", Article);
Mock.mock("/tags", Tag);
Mock.mock("/sorts", Sort);
Mock.mock("/timeline", Timeline);
Mock.mock("/comment", Comment);
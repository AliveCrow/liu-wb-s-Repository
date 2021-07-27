import Mock from "mockjs";

let Random = Mock.Random;

let article = {
  total: "@integer(1,100)",
  pageNum: 1,
  pageSize: 10,
  "articles|10": [
    {
      id: "@id",
      title: "@ctitle",
      content: "@cparagraph(20)",
      createTime: "@datetime()",
      author: "@cname()",
      "tags|1-5": ["@cword(2)"],
      commentNum: "@integer(1,300)",
    },
  ],
};

export default article;

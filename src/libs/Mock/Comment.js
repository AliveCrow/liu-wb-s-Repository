import Mock from "mockjs";

let Random = Mock.Random;

let comment= {
    total: "@integer(1,100)",
    pageNum: 1,
    pageSize: 10,
    "comments|10": [
        {
            id: "@id",
            username: "@cname()",
            content: "@cparagraph(20)",
            createTime: "@datetime()",
            author: "@cname()",
            responder:null, //回复谁的
            "replayList|10": [
                {
                    id: "@id",
                    username: "@cname",
                    content: "@cparagraph(20)",
                    createTime: "@datetime()",
                    author: "@cname()",
                    responder:"@cname()", //回复谁的
                },
            ],

        },
    ],
};

export default comment;

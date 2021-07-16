import Mock from 'mockjs';

let Random = Mock.Random;

let data = {
    "body": {
        "total":211,
        "pageNum":1,
        "pageSize":10,
        "articles|10":[
            {
                "id:":Random.id(),
                "title":Random.ctitle(),
                "content":Random.cparagraph(20),
                "createTime":Random.datetime(),
                "author":Random.cname(),
                "tags|1-5":[
                    '@cword(2)'
                ]

            }
        ]
    }
}

export default data;

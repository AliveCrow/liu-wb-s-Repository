import Mock from 'mockjs';
import Article from "@/libs/Mock/Article";


Mock.setup({
    timeout: '200-600'
})


Mock.mock('/articles',Article)


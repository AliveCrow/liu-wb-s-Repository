
import {calculateAge} from "@/utils";

const info = {
    name: "刘文博",
    job: "前端开发工程师",
    sex: "男",
    age: calculateAge("1997-08-22"),
    tel: "17607180959",
    email: "136907108@qq.com",
    blog: "https://dreamsakula.top",
    wechat: "Liu136907108",
    github: "https://github.com/AliveCrow",
    eduExperience: {
        name: "武昌首义学院",
        content: "电气工程及其自动化 / 本科 / 2015.09 - 2019.06"
    },
    skills: [
        {
            name: "前端基础",
            list: [
                ` <li class="item-intro">
                    能够使用 <strong>HTML5</strong> 和 <strong>CSS3</strong>
                    进行符合Web标准的语义化开发，具有还原设计稿的能力
                  </li>`,
                `<li class="item-intro">
                    熟悉 <strong>JavaScript</strong> 语言，掌握 <strong>ES6+</strong> 语法，持续关注
                    ECMAScript 标准
                  </li>`,
                `<li class="item-intro">
                    熟悉 <strong>AJAX</strong> 相关知识，能熟练运用 <strong>Promise</strong>
                    优化项目中的各种异步逻辑
                  </li>`,
                `<li class="item-intro">
                    了解 <strong>ES6-Modules</strong> 等常见的模块化规范
                  </li>`,
            ],
        },
        {
            name: "前端CSS工具",
            list: [
                `  <li class="item-intro">
                    熟悉 <strong>Less</strong> / <strong>Sass</strong> / <strong>Stylus</strong> 等CSS预处理、后处理工具
                  </li>`,
            ],
        },
        {
            name: "前端JS库",
            list: [
                `<li class="item-intro">
                    熟悉 <strong>jQuery</strong>
                    等工具库的使用，能够运用其封装的API简化项目中的业务逻辑
                  </li>`,
            ],
        },
        {
            name: "前端UI框架",
            list: [
                ` <li class="item-intro">
                    能熟练使用 <strong>Element</strong> /
                    <strong>iView</strong> / <strong>AntDesign</strong> /
                    <strong>CubeUI</strong>
                    等UI框架完成业务组件
                  </li>`
            ]
        },
        {
            name: "前端自动化构建工具",
            list: [
                `<li class="item-intro">
                    在项目中使用过 <strong>WebPack</strong> /
                    <strong>Parcel</strong>
                    等打包工具，熟悉前端工程化构建流程
                  </li>`
            ]
        },
        {
            name: "前端数据可视化",
            list: [
                `<li class="item-intro">
                    能够使用
                    <strong>ECharts</strong> 等库完成一些简单的数据可视化需求
                  </li>`
            ]
        },
        {
            name: "后台技术",
            list: [
                `<li class="item-intro">
                    熟悉 <strong>Node.js</strong> 常用模块，能用
                    <strong>Express</strong>
                    等框架搭建基础的Web服务
                  </li>`
            ]
        },
        {
            name: "其他",
            list: [
                ` <li class="item-intro">
                    熟悉PC与移动端的开发与适配，了解微信小程序开发
                  </li>`,
                `<li class="item-intro">
                    熟悉版本管理工具 <strong>Git</strong> 等的使用
                  </li>`,
                `<li class="item-intro">
                    熟悉 <strong>Markdown</strong> 语法，能用其编写技术文档
                  </li>`,
                `<li class="item-intro">
                    熟悉 <strong>LocalStorage</strong> /
                    <strong>SessionStorage</strong> /
                    <strong>Cookie</strong> 等数据存储技术
                  </li>`,
                `<li class="item-intro">
                    了解 <strong>Canvas</strong> /
                    <strong>Svg</strong> 等新特性的使用
                  </li>`
            ]
        }
    ],
    workExpression: [
        {
            companyName: "北京楼主科技有限公司",
            isPractice: true, //实习,
            startTime: '2019.07',
            endTime: '2019.11',
            workContent: [
                ` <li class="item-intro">了解工作流程,参与团队协作</li>`,
                `<li class="item-intro">独立承担对公司官网的代码分析与优化</li>`,
                `<li class="item-intro">
                    前端项目基于 <strong>jQuery</strong> 开发，运用
                    <strong>Swiper</strong> 完成页面效果
                  </li>`
            ]
        },
        {
            companyName: "北京楼主科技有限公司",
            isPractice: false, //实习,
            startTime: '2020.12',
            endTime: '至今',
            workContent: [
                `<li class="item-intro">负责京东数科的行政管理服务平台</li>`,
                `<li class="item-intro">
                行政管理服务平台是用于公司内部管理信息发布,公司交流圈,以及各种用户申请,访客预约,信息登记以及审批的流程信息管理工具
              </li>`,
                `<li class="item-intro">
                根据需求及原型，完成项目各个页面的开发，以及项目技术选型、架构搭建到打包的完整流程
              </li>`,
                `<li class="item-intro">
                项目以
                <strong>Vue</strong> 为核心技术栈，基于
                <strong>vue-cli</strong> 脚手架，配合
                <strong>CubeUI</strong>、<strong>Vant</strong>
                等UI框架进行业务开发，并使用
                <strong>ECharts</strong> 将数据在前端进行展示
              </li>`,
                `<li class="item-intro">
                对组件
                <strong>vue2-slot-calendar</strong>
                进行二次封装,以满足项目中的需求
              </li>`,
                ` <li class="item-intro">
                将公共组件、方法、样式与非业务模块等进行封装，在开发过程中不断完善公共依赖库，并在项目各个组件中得以复用，提升开发效率
              </li>`,
                `<li class="item-intro">
                使用 <strong>compression-webpack-plugin</strong> 开启
                <strong>gzip</strong>,减小打包后的大小,
              </li>`,
                `<li class="item-intro">
                使用
                <strong>generate-asset-webpack-plugin</strong>
                将需要进行修改的配置信息外放,使其打包后仍可修改
              </li>`,
                `<li class="item-intro">
                技术栈:
                <strong>Vue</strong
                >、<strong>Vuex</strong>、<strong>Vue-Router</strong>、<strong>ECharts</strong>、<strong
              >Webpack</strong
              >
              </li>`
            ]
        }
    ],
    openSourceProject: [
        {
            name: "GritUI —— 组件库",
            source: "https://github.com/AliveCrow/AliveUI",
            preview: "http://alivenote.dreamsakula.top/#/",
            description: "一套基于Vue3的组件库，让开发者专注于更好的用户体验",
            list: [
                `<li class="item-intro">
                    本应用可以快速的实现记账功能,为满足日常需求开发
                  </li>`,
                `<li class="item-intro">
                    在此项目中使用 <strong>TypeScript</strong> ,
                    熟悉了其基本语法,以及
                    <Strong>Class</Strong> 风格的Vue组件的编写
                  </li>`,
                `<li class="item-intro">
                    使用 <Strong>Vuex</Strong> 实现了数据的全局管理
                  </li>`,
                `<li class="item-intro">
                    使用
                    <Strong>LocalStorage</Strong> 实现了应用数据的本地存储功能
                  </li>`
            ]
        },
        {
            name: "WebApp —— 记账本",
            source: "https://github.com/AliveCrow/bill",
            preview: "https://ledger.dreamsakula.top/#/money",
            description: " 使用Vue2 + TypeScript开发的一款本地记账本,实现了账单添加、账单编辑、账单统计等功能",
            list: [
                `<li class="item-intro">
                    本应用可以快速的实现记账功能,为满足日常需求开发
                  </li>`,
                `<li class="item-intro">
                    在此项目中使用 <strong>TypeScript</strong> ,
                    熟悉了其基本语法,以及
                    <Strong>Class</Strong> 风格的Vue组件的编写
                  </li>`,
                `<li class="item-intro">
                    使用 <Strong>Vuex</Strong> 实现了数据的全局管理
                  </li>`,
                `<li class="item-intro">
                    使用
                    <Strong>LocalStorage</Strong> 实现了应用数据的本地存储功能
                  </li>`
            ]
        },
        {
            name: "AliveNote —— 云笔记应用",
            source: "https://github.com/AliveCrow/Vue_aliveNote",
            preview: "http://alivenote.dreamsakula.top/#/",
            description: "使用Vue2 + TypeScript开发的云笔记应用",
            list: [
                ` <li class="item-intro">
                    实现了登录,注册,找回密码,头像上传,归档,垃圾回收7天撤回机制
                  </li>`,
                `<li class="item-intro">
                    \b此项目借鉴GoogleKeep, 实现简单的笔记记录功能, 使用
                    <Strong>sass</Strong> 完成前端样式,
                  </li>`,
                `<li class="item-intro">
                    在项目搭建过程中,熟悉了
                    <Strong>jQuery</Strong> 语法,以及模块化开发的思想
                  </li>`,
                `<li class="item-intro">
                    在未来的时间中,计划使用
                    <Strong>React</Strong> 对网站进行重构
                  </li>`
            ]
        },
        {
            name: "AliceMusic —— 在线音乐网站",
            source: "https://github.com/AliveCrow/jQuery-AliceMusic",
            preview: "http://alivemusic.dreamsakula.top/",
            description: "使用jQuery开发的网页音乐应用,播放源为QQ音乐",
            list: [
                `<li class="item-intro">
                实现音乐的播放,歌词滚动,进度条,用户根据
                <Strong>Cookie</Strong>
                进行登录,登录后可以获取到用户的歌单等信息
              </li>`,
                ` <li class="item-intro">
                音乐播放来源为QQ音乐,接口根据QQ音乐官网获得,使用
                <Strong>Express</Strong> 对接口进行二次封装
              </li>`,
                ` <li class="item-intro">
                在此项目后端接口使用 <strong>Express</strong> 搭建,
                成功实现了搜索,笔记创建,修改,删除等功能接口
              </li>`
            ]
        }
    ]
}
export default info
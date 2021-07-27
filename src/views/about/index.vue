<template>
  <Container>
    <article class="container">
      <section class="side">
        <div class="me">
          <!-- <div class="avatar"></div> -->
          <h1 class="name">{{ info.name }}</h1>
          <p class="job">{{ info.job }}</p>
        </div>
        <div class="unit info">
          <h2 class="unit-title">
            <svg class="title-icon icon" aria-hidden="true">
              <use xlink:href="#icon-user"></use>
            </svg>
            <span class="title-name">基本信息</span>
          </h2>
          <div class="unit-content">
            <div class="item">
              <div class="item-title">姓名</div>
              <div class="item-content">{{ info.name }}</div>
            </div>
            <div class="item">
              <div class="item-title">性别</div>
              <div class="item-content">{{ info.sex }}</div>
            </div>
            <div class="item">
              <div class="item-title">年龄</div>
              <div id="age" class="item-content">{{ info.age }}</div>
            </div>
          </div>
        </div>
        <div class="unit contact">
          <h2 class="unit-title">
            <svg class="title-icon icon" aria-hidden="true">
              <use xlink:href="#icon-phone"></use>
            </svg>
            <span class="title-name">联系方式</span>
          </h2>
          <div class="unit-content">
            <div class="item">
              <div class="item-title">手机</div>
              <div class="item-content">
                <a href="tel:17607180959">{{ info.tel }}</a>
              </div>
            </div>
            <div class="item">
              <div class="item-title">邮箱</div>
              <div class="item-content">
                <a href="136907108@qq.com">{{ info.email }}</a>
              </div>
            </div>
            <div class="item">
              <div class="item-title">主页</div>
              <div class="item-content">
                <a href="https://dreamsakula.top">{{ info.blog }}</a>
              </div>
            </div>
            <div class="item">
              <div class="item-title">微信</div>
              <div class="item-content">{{ info.wechat }}</div>
            </div>
            <div class="item">
              <div class="item-title">Github</div>
              <div class="item-content">
                <a href="https://github.com/AliveCrow">{{ info.github }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="unit education">
          <h2 class="unit-title">
            <svg class="title-icon icon" aria-hidden="true">
              <use xlink:href="#icon-graduation-cap"></use>
            </svg>
            <span class="title-name">教育经历</span>
          </h2>
          <div class="unit-content">
            <div class="item">
              <div class="item-title">{{ info.eduExperience.name }}</div>
              <div class="item-content">
                {{ info.eduExperience.content }}
              </div>
            </div>
          </div>
        </div>
        <div class="unit skill">
          <h2 class="unit-title">
            <svg class="title-icon icon" aria-hidden="true">
              <use xlink:href="#icon-wrench"></use>
            </svg>
            <span class="title-name">技能清单</span>
          </h2>
          <div class="unit-content">
            <div class="item" :key="index" v-for="(item, index) in info.skills">
              <div class="item-title">{{ item.name }}</div>
              <div class="item-content">
                <!-- HTML5 CSS3 JavaScript AJAX HTTP Promise -->
                <blockquote
                  v-html="item1"
                  v-for="(item1, index1) in item.list"
                ></blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="main">
        <div class="unit work">
          <h2 class="unit-title">
            <svg class="title-icon icon" aria-hidden="true">
              <use xlink:href="#icon-briefcase"></use>
            </svg>
            <span class="title-name">工作经历</span>
          </h2>
          <div class="unit-content">
            <div class="item" v-for="company in info.workExpression">
              <div class="item-title">
                {{ company.companyName }}
                <a class="link" href="#" v-show="company.isPractice">实习</a>
              </div>
              <div class="item-subtitle">
                {{ company.startTime }} - {{ company.endTime }}
              </div>
              <div class="item-content">
                <ul class="item-intro-wrapper">
                  <blockquote
                    v-html="item1"
                    v-for="(item1, index1) in company.workContent"
                  ></blockquote>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="unit project">
          <h2 class="unit-title">
            <svg class="title-icon icon" aria-hidden="true">
              <use xlink:href="#icon-code"></use>
            </svg>
            <span class="title-name">开源项目</span>
          </h2>
          <div class="unit-content">
            <div class="item" v-for="project in info.openSourceProject">
              <div class="item-title">
                {{ project.name }}
                <a class="link" :href="project.source">源码</a>
                <a class="link" :href="project.document">文档</a>
              </div>
              <div class="item-subtitle">
                {{ project.description }}
              </div>
              <div class="item-content">
                <ul class="item-intro-wrapper">
                  <blockquote
                    v-html="item1"
                    v-for="(item1, index1) in project.list"
                  ></blockquote>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </Container>
</template>

<script>
import info from "@/libs/info";

export default {
  name: "index",
  data() {
    return {
      info,
    };
  },
};
</script>

<style>
.item-intro {
  list-style: disc;
  list-style-position: inside;
  text-align: left;
}
strong {
  color: #52c41a;
  font-size: 1rem;
  font-weight: bold;
}
</style>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

body {
  width: 100%;
  height: 100%;
  line-height: 1.5;
  font-size: 1rem;
  background-color: #eee;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  display: flex;
  width: 1200px;
  height: 100%;
  font-size: 1rem;
  color: #333;
  margin: 50px auto;
  background-color: #fff;
  /* box-shadow: 0px 0px 10px 2px #ccc; */
}

@media screen and (max-width: 1280px) {
  .container {
    width: 960px;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    width: 820px;
  }
}

@media screen and (max-width: 860px) {
  .container {
    /* width: 700px; */
    width: 100%;
    margin: 0;
    flex-direction: column;
  }
}

/* @media screen and (max-width: 768px) {
  .container {
    width: 100%;
    margin: 0;
    flex-direction: column;
  }
} */

.side {
  width: 35%;
  /* background-color: #f5f5f5; */
}

@media screen and (max-width: 860px) {
  .side {
    width: 100%;
  }
}

.side .me,
.unit {
  padding: 0 5%;
  margin: 30px 0;
}

.side .me {
  text-align: center;
}

.side .me .name,
.side .me .job {
  margin: 16px 0;
}

.side .me .name {
  font-size: 26px;
  font-weight: 700;
}

.side .me .job {
  font-size: 20px;
}

.side .unit-title,
.main .unit-title {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
  margin-bottom: 10px;
}

.side .unit-title .title-icon,
.main .unit-title .title-icon {
  font-size: 20px;
  margin-right: 6px;
}

.side .unit-content .item,
.main .unit-content .item {
  margin-bottom: 14px;
}

.main .unit-content .item {
  margin-bottom: 28px;
}

.side .unit-content .item .item-title {
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 700;
  text-align: left;
}

.side .unit.info .unit-content .item,
.side .unit.contact .unit-content .item {
  display: flex;
  align-items: center;
}

.side .unit.info .unit-content .item-title,
.side .unit.contact .unit-content .item-title {
  width: 30%;
  font-weight: normal;
  font-size: 1rem;
  margin-bottom: 2px;
  line-height: 20px;
}

.side .unit-content .item .item-content {
  font-size: 1rem;
  color: #777;
  line-height: 20px;
}

.side .unit.info .unit-content .item-content,
.side .unit.contact .unit-content .item-content {
  width: 70%;
  color: #333;
}

.side .unit-content .item .item-content .item-intro-wrapper {
  list-style-position: inside;
  padding-left: 0;
}

.main {
  width: 65%;
}

@media screen and (max-width: 860px) {
  .main {
    width: 100%;
  }
}

.main .unit {
  margin: 30px 0;
  padding: 0 5%;
}

.main .unit-content .item .item-subtitle {
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: left;
}

.main .unit-content .item .item-title {
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 700;
  line-height: 20px;
}

.main .unit-content .item .item-title .link {
  color: #333;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 0 4px;
  text-decoration: none;
  margin-left: 10px;
  font-weight: normal;
  margin-bottom: 10px;
}

.main .unit-content .item .item-content {
  font-size: 1rem;
  line-height: 20px;
  color: #777;
}

.main .unit-content .item .item-content .item-intro-wrapper {
  list-style-position: inside;
  padding-left: 0;
}

@media print {
  body {
    background-color: white;
  }

  .container {
    /* height: 1120px; */
    /* height: 1123px; */
    /* overflow: hidden; */
    width: 100%;
    margin: 0;
    flex-direction: column;
  }

  .side,
  .main {
    width: 100%;
  }

  .side .me,
  .unit {
    margin: 20px 0;
  }

  .main .unit {
    margin: 20px 0;
  }
}
</style>

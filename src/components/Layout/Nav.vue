<template>
  <div class="c-nav">
    <Container style="line-height: 60px; height: 60px">
      <div class="c-nav-wrapper">
        <div class="c-nav-left">
          <LinkToPage
            :route="{
              path: '/',
            }"
          >
            {{ title }}
          </LinkToPage>
        </div>
        <div class="c-nav-right hidden-xs-only">
          <LinkToPage
            @click.native="navClick"
            ref="nav-list"
            :route="item.route"
            :key="item.id"
            v-for="item in NavList"
          >
            <div class="nav-item">
              {{ item.name }}
            </div>
          </LinkToPage>
          <div class="nav-border-bottom"></div>
        </div>
        <div class="c-nav-right-dot">
          <el-dropdown>
            <i class="el-icon-more" style="color: #fff"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :key="item.id" v-for="item in NavList">
                <LinkToPage
                  @click.native="navClick"
                  ref="nav-list"
                  :route="item.route"
                  active-class="active-page"
                >
                  <div class="nav-item" style="color: #555">
                    {{ item.name }}
                  </div>
                </LinkToPage>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import { NavList } from "@/libs/nav-list";

export default {
  name: "Nav",
  props: ["title", "description"],
  data() {
    return {
      NavList,
      routeMap: ["Homepage", "Archive", "TagCloud", "Snippet", "About"],
    };
  },
  mounted() {
    if (this.routeMap.forEach((r) => this.$route.name.includes(r))) {
      this.setInitBorder();
    }
  },
  methods: {
    navClick(e) {
      let { NavBorderBottom, NavContainer } = this;
      let rightDOM = NavContainer.getBoundingClientRect();
      let offsetX = e.target.getBoundingClientRect().left - rightDOM.left;
      NavBorderBottom.style.width = `${
        e.target.getBoundingClientRect().width
      }px`;
      NavBorderBottom.style.left = `${offsetX}px`;
    },
    setInitBorder() {
      let { NavBorderBottom, NavContainer } = this;
      let a = this.NavList.findIndex(
        (r) => r.route.path === this.$route.fullPath
      ); //路由对应的nav的index
      let initNavDOM = document.querySelectorAll(".nav-item")[a]; //路由所在nav项
      let offsetX =
        initNavDOM.getBoundingClientRect().left -
        NavContainer.getBoundingClientRect().left; //需要偏移的量
      NavBorderBottom.style.width = `${
        initNavDOM.getBoundingClientRect().width
      }px`;
      NavBorderBottom.style.left = `${offsetX}px`;
    },
  },
  computed: {
    NavContainer: () => document.querySelector(".c-nav-right"),
    NavBorderBottom: () => document.querySelector(".nav-border-bottom"),
  },
  watch: {
    immutable: true,
    $route: function (val) {
      if (this.routeMap.forEach((r) => val.name.includes(r))) {
        this.setInitBorder();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.c-nav {
  height: 60px;
  background-color: $--nav-background-color;

  &-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    color: $--nav-color;
  }

  &-right {
    height: 100%;
    display: flex;
    position: relative;
    transition: all ease 0.8s;

    .nav-border-bottom {
      height: 3px;
      background-color: $--nav-hover-color;
      position: absolute;
      bottom: 0;
      transition: all ease-in-out 0.25s;
    }

    .nav-item {
      font-size: 1.1rem;
      line-height: 60px;
      height: 100%;
      padding: 0 15px;
      cursor: default;

      &:hover {
        color: $--nav-hover-color;
      }
    }
  }
}

.c-nav-right-dot {
  display: none;
}

@media (max-width: 768px) {
  .c-nav-right-dot {
    display: block;
  }
}
</style>

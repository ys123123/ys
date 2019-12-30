<template>
  <div class="app">
    <div class="home">
      <van-nav-bar title="加班/休假" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
      </van-nav-bar>
      <div class="contain">
        <div class="nav">
          <template v-for="item in list">
            <router-link :key="item.path" :to="item.path">
              <i class="iconfont" :class="item.icon"></i>
              <div class="name">
                {{item.name}}
              </div>
            </router-link>
          </template>
        </div>
        <div class="tab">
          <div class="tabs">
            <span>加班</span><span>休假</span>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '待处理',
          icon: 'icon-home2',
          path: '/wait'
        },
        {
          name: '已发送',
          icon: 'icon-fenlei',
          path: '/already'
        },
        {
          name: '已处理',
          icon: 'icon-profile',
          path: '/finish'
        },
      ]
    }
  }
}
</script>
<style lang="scss">
  .app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
      .home{
        width: 100%;
        height: 100px;
      }
      .contain{
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: auto;
      }
  }
  .nav{
    width: 100%;
    height: 90px;
    display: flex;
    background: #fff;
    a{
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #666;
      i{
        font-size: 26px;
      }
      &.router-link-exact-active{
                color: green;
                font-weight: 400;
            }
    }
  }
  .tab{
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    .tabs{
      width: 50%;
      height: 30px;
      border-radius: 30px;
      border:1px solid green;
      display: flex;
      span{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: green;
      }
    }
  }
</style>

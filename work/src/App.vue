<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('./assets/css/reset.scss');
@import url('./assets/iconfont/iconfont.css');
html{
  font-size: calc(100 / 750 * 100vw)
}
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

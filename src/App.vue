<template>
  <div id="app">
    <div v-bind:class="{navBg: isbg}">
      <div  class="container">
        <router-link to="/"><img :src="img"></router-link> 
        <ul class="nav">
          <li><router-link to="/" >{{profile}}</router-link></li>         
          <li><router-link to="/home/major">{{major}}</router-link></li>
          <li><router-link to="/home/project">{{project}}</router-link></li>
          <li><router-link to="/home/work">{{work}}</router-link></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isbg: true,
      img: require('./assets/images/logo.png'),
      profile: '首页',
      major: '擅长技术',
      project: '项目经验',
      work: '工作经历'
    }
  }
}
</script>

<style lang="scss">
@import "assets/stylesheets/screen.css";
</style>

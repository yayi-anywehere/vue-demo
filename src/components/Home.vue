<template>
	<div id="home">
		<div class="ice"></div>
	<div class="ice1"></div>
		<div class="container tab1-font">
			<img :src="icon" class="tab1-img">
			<div class="tab1-summary"></div>
			<h1>{{myname}}</h1>
			<p>{{work}}</p>
			<p>{{email}}</p>
			<div>
				<a href="https://github.com/yana77/Lilian" title="GitHub"><img :src="icon1" class="tab-icon"></a>
				<a href="http://blog.csdn.net/yana_loo" title="CSDN"><img :src="icon2" class="tab-icon"></a>
				<a href="http://www.cnblogs.com/hi-lilian/" title="CSDN"><img :src="icon3" class="tab-icon"></a>
			</div>
		</div>
		<div class="tab1-footer"></div>	
	</div>
	</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      icon: require('../assets/images/photo.png'),
      myname: '罗雅怡 (Lilian)',
      work: 'Web前端工程师',
      email: 'luoluo0999@foxmail.com',
      icon1: require('../assets/images/github.png'),
      icon2: require('../assets/images/cdsn.png'),
      icon3: require('../assets/images/cnblog.png')
    }
  }
}
</script>
<template>
	<div id="work" class="container">
		<h1 class="tab1-title">{{tab1}}</h1>
		<div class="workBox">
			<h2>{{fox}}</h2>
			<h4>{{foxY}}</h4>
			<h2>{{sec}}</h2>
			<h4>{{secY}}</h4>
			<h2>{{thir}}</h2>
			<h4>{{thirY}}</h4>
		</div>
	</div>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      tab1: '工作经历',
      fox: '深圳富士康科技集团（总部周边事业群）',
      foxY: 'Web前端开发 2015/6-2017/7',
      sec: '惠州源丰科技有限公司',
      secY: 'Web前端开发 2014/9-2015/6',
      thir: '惠州正天文化传媒(实习)',
      thirY: '开发 2013/9-2014/3'
    }
  }
}
</script>
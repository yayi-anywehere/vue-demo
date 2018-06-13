<template>
	<div id="work" class="container">
		<h1 class="tab1-title">{{tab1}}</h1>
		<div class="workProject">
			<div class="project-small">
				<img :src="icon" class="tab-icon">
			</div>
			<div class="project-big">
				<a href="http://www.always-show.com/zh-hant" class="col-md-12">{{alwayshow}}</a> <br>
				<p>{{alwayshow2}}</p> 
				<p >{{alwayshow1}}</p> 
				<a href="http://www.garqi-rfid.com" class="col-md-12">{{jiaqi}}</a><br>
				<a href="http://www.yakilo.com" class="col-md-12">{{enriv}}</a><br>
				<div>{{small}}</div>
				<div>{{smallWeb}}</div>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
  name: 'work',
  data () {
    return {
      tab1: '项目经验',
      alwayshow: '二维秀 Always-Show | 免费创作漫画、小说、插画「ALL IN ONE」娱乐平台',
      alwayshow2: '二维秀 第二平台',
      alwayshow1: '二维秀 第一平台',
      jiaqi: '深圳嘉奇公司官网制作',
      enriv: '惠州雅清乐环保有限公司',
      small: '微网站',
      smallWeb: '港惠新天地、名流印象等企业微网站开发',
      icon: require('../../assets/images/smile.png')
    }
  }
}
</script>